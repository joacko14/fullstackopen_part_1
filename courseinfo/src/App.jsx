const Header = ({ courseName }) => {
  return (
    <>
      <h1>{courseName}</h1>
    </>
  );
};
const Content = ({ data }) => {
  return (
    <>
      <Part name={data[0].name} exercises={data[0].exercises} />
      <Part name={data[1].name} exercises={data[1].exercises} />
      <Part name={data[2].name} exercises={data[2].exercises} />
    </>
  );
};
const Total = ({ count }) => {
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
  const part1 = "Fundamentals of react";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const data = [
    { name: part1, exercises: exercises1 },
    { name: part2, exercises: exercises2 },
    { name: part3, exercises: exercises3 },
  ];

  return (
    <>
      <Header courseName={course} />
      <Content data={data} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </>
  );
};

export default App;
