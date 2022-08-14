const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ total }) => <h3>Number of exercises {total}</h3>;

const App = () => {
  const course = "Half Stack application development";

  // using objects in our application...
  const part1 = {
    name: "Fundamentals of React",
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

  const parts = [part1, part2, part3];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        total={parts
          .map((part) => part.exercises)
          .reduce((acc, cur) => acc + cur)}
      />
    </div>
  );
};

export default App;
