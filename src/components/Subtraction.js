import React, { useContext } from "react";

import { CalculatorContext } from "../providers/CalculatorContext";

const Subtraction = () => {
  console.log("Subtraction component is rendered");

  const context = useContext(CalculatorContext);

  return <button onClick={() => context.subtraction()}>SUBTRACT</button>;
};

export default Subtraction;
