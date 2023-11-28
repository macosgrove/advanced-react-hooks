// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
    let change
    switch (action.type) {
    case 'INCREMENT':
        change = ({count: (state.count + action.step)})
        break;
    default:
        change = action;
    }
    return {...state, ...change}
}

function Counter({initialCount = 0, step = 1}) {

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
