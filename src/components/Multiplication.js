import React, { useContext } from "react";

import { CalculatorContext } from "../providers/CalculatorContext";

const Multiplication = () => {
  const { multiplication } = useContext(CalculatorContext);

  console.log("Multiplication component is rendered");

  return <button onClick={() => multiplication()}>MULTIPLY</button>;
};

export default Multiplication;
