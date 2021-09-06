import React, { useContext } from "react";

import { CalculatorContext } from "../providers/CalculatorContext";

const Division = () => {
  const context = useContext(CalculatorContext);

  return <button onClick={() => context.division()}>DIVISION</button>;
};

export default Division;
