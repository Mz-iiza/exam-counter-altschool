import {Link} from "react-router-dom"


const ErrorFallback = () => {
  return (
    <div className ="efb">
      <h1>Something went wrong! </h1>
      <p>
       Click <Link to="/">CounterA</Link> to navigate back to CounterA and reload browser.
      </p>
    </div>
  )
}

export default ErrorFallback;