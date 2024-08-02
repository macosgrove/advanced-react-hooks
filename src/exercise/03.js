// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

function CountProvider(props) {
    const countState = React.useState(0)
    return <CountContext.Provider value={countState} {...props}></CountContext.Provider>
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = React.useContext(CountContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [, setCount] = React.useContext(CountContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
          <CountDisplay />
          <Counter />
      </CountProvider>
    </div>
  )
}

export default App
