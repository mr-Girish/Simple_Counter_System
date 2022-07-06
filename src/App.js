import { useState } from 'react';
import './App.css';

function App() {
  const [state,setState]=useState(0); /// this is a state for change the current value state name can be anythin
  const EventIncrement=()=>{  // functionn to do the task fro incremenet
    setState(state+1);
  }
  const EventDecrement=()=>{   // function to do the task for decrement
    setState(state-1)
  }
  return (
    <div className="App">
        <h1>Counter Application</h1>
        <h1>{state}</h1>
        <button onClick={EventIncrement}>increment</button>
        <button onClick={EventDecrement}>decrement</button>
    </div>
  );
}

export default App;
