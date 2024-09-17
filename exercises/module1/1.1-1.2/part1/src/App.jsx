const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = ({part, amount}) => {
  return (
    <>
      <p>
        {part} {amount}
      </p>
    </>
  )
}

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (
    <>
    <Part part={part1} amount={exercises1}></Part>
    <Part part={part2} amount={exercises2}></Part>
    <Part part={part3} amount={exercises3}></Part>

    </>
  )
}

const Footer = ({ amount }) => {
  return (
    <>
      <p>Number of exercises {amount}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} 
        exercises1={exercises1} 
        part2={part2} 
        exercises2={exercises2} 
        part3={part3} 
        exercises3={exercises3} 
      />
      <Footer amount={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
