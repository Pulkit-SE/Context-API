import React, { useContext } from "react";

import { CalculatorContext } from "../providers/CalculatorContext";

const TakeUserInputs = () => {
  const context = useContext(CalculatorContext);

  return (
    <>
      <input
        placeholder="first number"
        onChange={(e) => context.updateFirstNumber(e.target.value)}
        value={context.firstNumber}
        type="number"
      />

      <input
        onChange={(e) => context.updateSecondNumber(e.target.value)}
        value={context.secondNumber}
        type="number"
      />
    </>
  );
};

export default TakeUserInputs;
