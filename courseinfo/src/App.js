const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part title={part.title} exercises={part.exercises} />
      ))}
    </>
  );
};

const Part = ({ title, exercises }) => (
  <p>
    {title} {exercises}
  </p>
);

const Total = ({ total }) => <h3>Number of exercises {total}</h3>;

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { title: "Fundamentals of React", exercises: 10 },
    { title: "Using props to pass data", exercises: 7 },
    { title: "State of a component", exercises: 14 },
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
