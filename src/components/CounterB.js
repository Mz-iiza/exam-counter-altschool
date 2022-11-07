import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increment") {
    return state + 1;
  } else if (action.type === "decrement") {
    return state - 1;
  } else if (action.type === "reset") {
    return 0;
  } else {
    return state;
  }
}

const CounterB = () => {
  const [counterValue, dispatch] = useReducer(reducer, 0);

  return (
    <div className="app-container-opacity">
      <div className="app">
        <button
          className="count-btn decrement-button"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>

        <div className="app-value"> {counterValue}</div>

        <button
          className="count-btn increment-button"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>

        <div className="app-actions">
          <button
            className="reset-btn"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterB;
