const ClickCounter = ({count, setCount, title}) => {
    return (
        <>
        <div className="card">
        <Title title={title}></Title>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <PopUp count= {count}></PopUp>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
        </>
    )
}

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