import UseCounter from "../customhooks/UseCounter";



const CounterA = () => {
 const { counter, increment, decrement, reset, setvalue, inputRef } = UseCounter(0);
 
  return (
    <div className="app-container-opacity">
      <div className="app">
      
        <button disabled={counter <= 0} className="count-btn btn highlight-button " onClick={decrement}>
          Decrement
        </button>
        <div className="counter__box">{counter}</div>
        <input  className="app-value" type="text" ref={inputRef}/>
        <button className="count-btn btn " onClick={increment}>
          Increment
        </button>
        <div className="app-actions">
        <button className="app-action-btn reset-btn" onClick={reset}>
          Reset
        </button>
        <button className="app-action-btn setvalue-btn" onClick={setvalue}>Set Value</button>

        </div>
      </div>
    </div>
  );
};
export default CounterA;

/*
initialCount

 

function CounterA(initialCount) {
  const [count, setCount] = useState(initialCount);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(initialCount);
  }

  function setValue(newValue) {
    setCount(newValue);
  }

  return { count, increment, decrement, reset, setValue };
}*/



