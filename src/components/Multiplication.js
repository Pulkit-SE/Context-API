import React, { useContext } from "react";

import { CalculatorContext } from "../providers/CalculatorContext";

const Multiplication = () => {
  const { multiplication } = useContext(CalculatorContext);

  console.log("multiplication", multiplication);

  return <button onClick={() => multiplication()}>MULTIPLY</button>;
};

export default Multiplication;
