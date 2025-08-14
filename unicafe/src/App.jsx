import { useEffect, useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} <b>{isNaN(value) ? "-" : value}</b>
    </p>
  );
};

const Statistics = ({ statistics }) => {
  return (
    <>
      <h3>Statistics</h3>
      {statistics.all > 0 ? (
        Object.entries(statistics).map(([statName, statValue]) => (
          <StatisticLine text={statName} value={statValue} />
        ))
      ) : (
        <p>No feedback given</p>
      )}
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

  const handleClick = (stat) => {
    console.log;
    setStatistics((prev) => ({
      ...prev,
      [stat]: prev[stat]++,
    }));
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
      <Button text="Good" onClick={() => handleClick("good")} />
      <Button text="Neutral" onClick={() => handleClick("neutral")} />
      <Button text="Bad" onClick={() => handleClick("bad")} />
      <Statistics statistics={statistics} />
    </>
  );
}

export default App;
