import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const [colorTracker, setColorTracker] = useState(0);
  const [nextColorTracker, setNextColorTracker] = useState(1);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <button 
        onClick={() => {
          setNextColorTracker((nextColorTracker + 1) % 5);
          setColorTracker((colorTracker + 1) % 5);
        }} 
        style={{ backgroundColor: colors[colorTracker] }}>
        {colors[nextColorTracker]}
      </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
