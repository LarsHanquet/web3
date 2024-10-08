import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './components/ClickCounter'

function App() {
  
  const [count, setCount] = useState(() => {
    let savedCount = localStorage.getItem('count');
    if (savedCount == undefined || isNaN(savedCount)) {
      savedCount = 0;
    }
    return savedCount;
  });
  const title = "TITRE"
  console.log(parseInt(localStorage.getItem("count")))

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
      <ClickCounter count= {count} setCount= {setCount} title= {title} hoverMsg= {"Please click on me now !" }></ClickCounter>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
