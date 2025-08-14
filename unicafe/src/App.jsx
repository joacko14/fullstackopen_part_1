import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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

  return (
    <>
      <h3>give feedback</h3>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h3>statistics</h3>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  );
}

export default App;
