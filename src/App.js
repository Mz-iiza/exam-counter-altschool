import { Routes, Route, NavLink } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import React from 'react';


import {
  CounterA,
  CounterB,
  ErrorPage,
  ErrorFallback,
  TestErrorBound,
} from "./components/index";


const CustomNavLink = ( {to, ...props }) => {
  let activeState = {
    textDecoration: "none", 
    background: "#000",
    color: "rgba(255, 255, 255, 0.3)",
    Transition: "all 3s",
  };

  return (
<NavLink
style={({isActive}) =>
isActive ? activeState : {textDecoration: "none", color: "#fff"}
}
 to = {to}
 end
 { ...props} 
 />
 );
};

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="app-name" >COUNTER</div>
      <CustomNavLink to="/" className="nav-link" >
        CounterA
      </CustomNavLink>
      <CustomNavLink to="/counterb" className="nav-link">
        CounterB
      </CustomNavLink> 
      <CustomNavLink to="/testerrorbound" className="nav-link">
        Test
      </CustomNavLink>
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
