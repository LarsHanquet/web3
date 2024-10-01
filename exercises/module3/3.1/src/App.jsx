import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral;
  const average = (good * 1 + bad * -1 + neutral * 0) / all;
  const positive = (good / all) * 100;

  return (
    <>
      <h1>statistics</h1>
      <table>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={`${positive} %`} />
      </table>

    </>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>

  )
}

const Button = ({ update, text }) => {
  return (
    <button onClick={() => update(prev => prev + 1)}>
      {text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button update={setGood} text="good" />
      <Button update={setNeutral} text="neutral" />
      <Button update={setBad} text="bad" />

      {good + neutral + bad !== 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default App
