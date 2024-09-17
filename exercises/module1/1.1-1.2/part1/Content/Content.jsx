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

  export default Content;