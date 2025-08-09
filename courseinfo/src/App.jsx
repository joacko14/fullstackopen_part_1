const Hello = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </>
  );
};

const App = () => {
  const name = "Armando";
  const age = 33;
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Joaquín" age={31 + 2} />
      <Hello name={name} age={age} />
    </>
  );
};

export default App;
