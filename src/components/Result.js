import React, { useContext } from "react";

import { CalculatorContext } from "../providers/CalculatorContext";

const ShowResult = () => {
  const { result } = useContext(CalculatorContext);

  return <p>Result: {result}</p>;
};

export default ShowResult;
