import React from "react";

import Addition from "./components/Addition";
import CalculatorContext from "./providers/CalculatorContext";
import Division from "./components/Division";
import Multiplication from "./components/Multiplication";
import Subtraction from "./components/Subtraction";
import TakeUserInputs from "./components/Inputs";
import ShowResult from "./components/Result";

import "./App.css";

function App() {
  return (
    <div className="app">
      <CalculatorContext>
        <TakeUserInputs />

        <Addition />
        <Subtraction />
        <Multiplication />
        <Division />

        <ShowResult />
      </CalculatorContext>
    </div>
  );
}

export default App;
