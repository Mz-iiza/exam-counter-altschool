import { useReducer } from "react";

const initialValue = {counterValue: 0, inputValue: ""};

function reducer(state ={name: ""}, action) {
  switch (action.type) {
    case "increment" : 
    return { ...state, counterValue : state.counterValue + 1};
    case "decrement" :
    return { ...state, counterValue : state.counterValue - 1};
    case "reset" :
    return initialValue;
    case "setvalue" :
    return { ...state, inputValue : action.payload};
    case "changecount" :
    return { ...state, counterValue : action.payload};
    default :
    throw new Error("Invalid Operation");
  }
}

const CounterB = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const increment = ()=> { dispatch ({type:"increment"})};
  const decrement = ()=> { dispatch ({type:"decrement"})};
  const reset = ()=> { dispatch ({type:"reset"})};
  const handleClick = ()=> { dispatch ({type:"changecount", payload : state.inputValue - `${state.counterValue}`})};
  const handleChange = (e)=> { dispatch ({type:"setvalue", payload : e.target.value})};

  return (
    <div className="app-container-opacity">
      <div className="app">
        <button
           className="count-btn btn highlight-button b-btn"
          onClick={decrement}
        >
          -
        </button>

        <div className="counter__box">{state.counterValue}</div>
        <input  className="app-value" type="text" name="number" onChange={handleChange} value={state.inputValue} />
        <button
          className="count-btn btn b-btn"
          onClick={increment}
        >
          +
        </button>

        <div className="app-actions">
          <button
            className="reset-btn"
            onClick={reset}
          >
            Reset
          </button>

           <button className="app-action-btn setvalue-btn" onClick={handleClick }>Set Value</button>
        </div>
      </div>
    </div>
  );
};

export default CounterB;
