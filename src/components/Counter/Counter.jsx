import { useState } from "react";
import './Counter.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState('text');
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div className="counter">
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <h1>{value}</h1>
        <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)} 
        />
      </div>
    </>
  );
}
