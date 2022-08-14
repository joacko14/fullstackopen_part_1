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

  // And then place the objects into an array
  const parts = [
    {
      name: "Fundamentals of React",
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
