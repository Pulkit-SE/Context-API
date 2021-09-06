import React, { useContext } from "react";

import { CalculatorContext } from "../providers/CalculatorContext";

const Subtraction = () => {
  const context = useContext(CalculatorContext);

  return <button onClick={() => context.subtraction()}>SUBTRACT</button>;
};

export default Subtraction;
