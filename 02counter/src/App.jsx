import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // let counter = 15
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    
  }



  return (
    <>
      <h1>React Course HIT {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button> {" "}
      <button
      onClick={() => {
        setCounter(counter-1)
        console.log(counter);
      }}
      >Remove Value</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
