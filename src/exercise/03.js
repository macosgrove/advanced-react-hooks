// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

function useCount() {
    const context = React.useContext(CountContext)
    if (!context) {
        throw "`useCount` may only be used from within a CountProvider."
    }
    return context
}

function CountProvider(props) {
    const countState = React.useState(0)
    return <CountContext.Provider value={countState} {...props}></CountContext.Provider>
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [, setCount] = useCount()
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
