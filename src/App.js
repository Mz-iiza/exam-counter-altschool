import { Routes, Route, Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Helmet } from "react-helmet-async";

import {
  CounterA,
  CounterB,
  ErrorPage,
  ErrorFallback,
  TestErrorBound,
} from "./components/index";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="app-name">COUNTER</div>
      <Link to="/" className="nav-link">
        CounterA
      </Link>
      <Link to="/counterb" className="nav-link">
        CounterB
      </Link>
      <Link to="/testerrorbound" className="nav-link">
        Test
      </Link>
    </nav>
  );
}

function App() {
  const catchError = (error, errorMessage) => {
    console.log("Logging", error, errorMessage);
  };
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={catchError}>
        <NavBar />
        <Routes>
          <Route path="/" element={<CounterA />} />
          <Route path="/counterb" element={<CounterB />} />
          <Route path="/testerrorbound" element={<TestErrorBound />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
