const Header = ({ course }) => {
  const courseName = course.name;
  return (
    <>
      <h1>{courseName}</h1>
    </>
  );
};
const Content = ({ course }) => {
  const parts = course.parts;
  return (
    <>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </>
  );
};
const Total = ({ course }) => {
  const count = course.parts?.reduce((acc, val) => {
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
  const course = {
    name: "Half stack application development",
    parts: [
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
    ],
  };

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default App;
