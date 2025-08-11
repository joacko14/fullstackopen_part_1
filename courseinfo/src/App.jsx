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
  const part1 = {
    name: "Fundamentals of react",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  const data = [part1, part2, part3];

  return (
    <>
      <Header courseName={course} />
      <Content data={data} />
      <Total count={part1.exercises + part2.exercises + part3.exercises} />
    </>
  );
};

export default App;
