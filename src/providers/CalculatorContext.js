import React, { useState } from "react";

export const CalculatorContext = React.createContext();

const Calculator = ({ children }) => {
  const [result, updateResult] = useState(0);

  const [firstNumber, updateFirstNumber] = useState(0);

  const [secondNumber, updateSecondNumber] = useState(0);

  const addition = () => {
    updateResult(parseFloat(firstNumber) + parseFloat(secondNumber));
  };

  const subtraction = () => {
    updateResult(parseFloat(firstNumber) - parseFloat(secondNumber));
  };

  const multiplication = () => {
    updateResult(parseFloat(firstNumber) * parseFloat(secondNumber));
  };

  const division = () => {
    updateResult(parseFloat(firstNumber) / parseFloat(secondNumber));
  };

  return (
    <CalculatorContext.Provider
      value={{
        addition,
        division,
        firstNumber,
        multiplication,
        result,
        secondNumber,
        subtraction,
        updateFirstNumber,
        updateSecondNumber,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default Calculator;
