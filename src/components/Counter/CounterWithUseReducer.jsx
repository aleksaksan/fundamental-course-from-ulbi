import { useReducer } from "react";
import './Counter.scss';

export const CounterWithUseReducer = () => {
  const initialState = {counter: 0, value: ''};

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          counter: state.counter + 1
        };
      case 'DECREMENT':
        return {
          ...state,
          counter: state.counter - 1
        };
      case 'TYPE_TEXT':
        return {
          ...state,
          value: action.payload
        }
      default: 
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // const [counter, setCounter] = useState(0);
  // const [value, setValue] = useState('text');
  // const increment = () => {
  //   setCounter(counter + 1);
  // };
  // const decrement = () => {
  //   setCounter(counter - 1);
  // };

  return (
    <>
      <div className="counter">
        <h1>{state.counter}</h1>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
      </div>
      <div>
      <h1>{state.value}</h1>
      <input
          type="text"
          value={state.value}
          onChange={event => 
            dispatch({
              type: 'TYPE_TEXT',
              payload: event.target.value
            })} 
      />
      </div>
    </>
  );
}
