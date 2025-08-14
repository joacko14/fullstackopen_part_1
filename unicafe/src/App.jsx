import { useEffect, useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [statistics, setStatistics] = useState({
    all: 0,
    average: 0,
    positive: 0,
  });

  const handleGood = (event) => {
    event.preventDefault();
    setGood((prev) => prev + 1);
    console.log("good button clicked");
  };
  const handleNeutral = (event) => {
    event.preventDefault();
    setNeutral((prev) => prev + 1);
    console.log("Neutral button clicked");
  };
  const handleBad = (event) => {
    event.preventDefault();
    setBad((prev) => prev + 1);
    console.log("Bad button clicked");
  };

  useEffect(() => {
    setStatistics((prev) => ({
      ...prev,
      all: good + neutral + bad,
      average: (good - bad) / (good + neutral + bad),
      positive: good / (good + neutral + bad),
    }));
  }, [good, neutral, bad]);

  return (
    <>
      <h3>Give feedback </h3>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h3>Statistics</h3>
      <p>
        good <b>{good}</b>
      </p>
      <p>
        neutral <b>{neutral}</b>
      </p>
      <p>
        bad <b>{bad}</b>
      </p>
      <p>
        all <b>{statistics.all}</b>
      </p>
      <p>
        average <b>{isNaN(statistics.average) ? "-" : statistics.average}</b>
      </p>
      <p>
        positive <b>{isNaN(statistics.positive) ? "-" : statistics.positive}</b>
      </p>
    </>
  );
}

export default App;
