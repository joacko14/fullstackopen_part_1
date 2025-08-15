import { useEffect, useState } from "react";

const RandomButton = ({ currentNumber, setRandomNumber, maxNumber, text }) => {
  return (
    <button
      onClick={() => {
        let newNumber;
        do {
          newNumber = Math.floor(Math.random() * maxNumber);
        } while (newNumber === currentNumber);
        setRandomNumber(newNumber);
      }}
    >
      {text}
    </button>
  );
};

const VoteButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const handleVote = (votedAnecdote) => {
    setVotes((prev) => ({
      ...prev,
      [votedAnecdote]: (prev[votedAnecdote] || 0) + 1,
    }));
  };

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState({});

  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState();

  useEffect(() => {
    if (Object.keys(votes).length) {
      const mostVotedAnecdote = Object.entries(votes).reduce(
        (maxEntry, currentEntry) => {
          return currentEntry[1] > maxEntry[1] ? currentEntry : maxEntry;
        }
      )[0];
      setMostVoted(mostVotedAnecdote);
    }
  }, [votes]);

  return (
    <>
      <h3>Anecdote of the day</h3>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected] ?? "no"} votes</p>
      <VoteButton text="Vote" onClick={() => handleVote(selected)} />
      <RandomButton
        setRandomNumber={setSelected}
        currentNumber={selected}
        maxNumber={anecdotes.length}
        text="Next anecdote"
      />
      <h3>Anecdote with most votes</h3>
      <p>{anecdotes[mostVoted]}</p>
    </>
  );
};

export default App;
