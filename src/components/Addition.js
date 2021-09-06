import React, { useContext } from "react";

import { CalculatorContext } from "../providers/CalculatorContext";

const Addition = () => {
  const context = useContext(CalculatorContext);

  return <button onClick={() => context.addition()}>ADD</button>;
};

export default Addition;
