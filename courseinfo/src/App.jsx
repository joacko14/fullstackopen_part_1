const Header = ({ courseName }) => {
  return (
    <>
      <h1>{courseName}</h1>
    </>
  );
};
const Content = ({ parts }) => {
  return (
    <>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </>
  );
};
const Total = ({ parts }) => {
  const count = parts.reduce((acc, val) => {
    console.log(acc);
    return acc + val.exercises;
  }, 0);
  return (
    <>
      <h5>El total de ejercicios para el curso es: {count}</h5>
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const App = () => {
  const course = "Half stack application development";
  const parts = [
    {
      name: "Fundamentals of react",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <>
      <Header courseName={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default App;
