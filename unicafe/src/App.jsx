import { useEffect, useState } from "react";

const Statistics = ({ statistics }) => {
  return (
    <>
      <h3>Statistics</h3>
      {Object.entries(statistics).map(([statName, statValue]) => (
        <p key={statName}>
          {statName} <b>{isNaN(statValue) ? "-" : statValue}</b>
        </p>
      ))}
    </>
  );
};

function App() {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0,
  });

  const handleGood = (event) => {
    event.preventDefault();
    setStatistics((prev) => ({
      ...prev,
      good: prev.good++,
    }));
    console.log("good button clicked");
  };
  const handleNeutral = (event) => {
    event.preventDefault();
    setStatistics((prev) => ({
      ...prev,
      neutral: prev.neutral++,
    }));
    console.log("Neutral button clicked");
  };
  const handleBad = (event) => {
    event.preventDefault();
    setStatistics((prev) => ({
      ...prev,
      bad: prev.bad++,
    }));
    console.log("Bad button clicked");
  };

  useEffect(() => {
    setStatistics((prev) => ({
      ...prev,
      all: statistics.good + statistics.neutral + statistics.bad,
      average:
        (statistics.good - statistics.bad) /
        (statistics.good + statistics.neutral + statistics.bad),
      positive:
        statistics.good /
        (statistics.good + statistics.neutral + statistics.bad),
    }));
  }, [statistics.good, statistics.neutral, statistics.bad]);

  return (
    <>
      <h3>Give feedback </h3>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics statistics={statistics} />
    </>
  );
}

export default App;
