import { useState } from 'react';

const ClickCounter = ({count, setCount, title, hoverMsg}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
        <div className="card">
        <Title title={title}></Title>
        <button onClick={() => setCount((count) => count + 1)} onMouseEnter= {() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          count is {count}
        </button>
        {isHovered && <HoverMessage message={hoverMsg} />}

        <PopUp count= {count}></PopUp>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
        </>
    )
}

const HoverMessage = ({ message }) => {
    return (
      <div style={{ position: 'absolute', backgroundColor: '#fff', border: '1px solid black', padding: '5px', borderRadius: '5px' }}>
        {message}
      </div>
    );
  };
  

const Title = ({title}) => {
    return (
        <>
        <h1>{title}</h1>
        </>
    )
}

const PopUp = ({count}) => {
    if (count>=10) {
        return (
            <>
            <p>
            You are a master in the art of clicking !
            </p>
            </>
        )
    }
}

export default ClickCounter