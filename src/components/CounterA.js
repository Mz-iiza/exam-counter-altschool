import UseCounter from "../customhooks/UseCounter";

const CounterA = () => {
  const { counter, increment, decrement, reset } = UseCounter(0);
  return (
    <div className="app-container-opacity">
      <div className="app">
        <button className="count-btn decrement-button" onClick={decrement}>
          -
        </button>
        <input  className="app-value" value={counter} />
        <button className="count-btn increment-button" onClick={increment}>
          +
        </button>
        <div className="app-actions">
        <button className="app-action-btn reset-btn" onClick={reset}>
          Reset
        </button>
        </div>
      </div>
    </div>
  );
};

export default CounterA;
