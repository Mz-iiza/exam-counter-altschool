import UseCounter from "../customhooks/UseCounter"
const TestErrorBound = () => {
    const {counter, increment} = UseCounter(0)
    if (counter > 1 ){
        throw new Error();
    }else {
        return (
            <div className ="teb">
                <p>Click button to test error boundary</p>
                <div className="teb-boundary">{counter}</div>
                <button className="teb-btn" onClick={increment}>Test Error Boundary</button>
            </div>
          )
    }
  
}
export default TestErrorBound
