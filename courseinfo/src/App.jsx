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
      <p>
        {data[0].name} {data[0].exercises}
      </p>
      <p>
        {data[1].name} {data[1].exercises}
      </p>
      <p>
        {data[2].name} {data[2].exercises}
      </p>
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
