import React, { useContext } from "react";

import { CalculatorContext } from "../providers/CalculatorContext";

const ShowResult = () => {
  console.log("Show result component is rendered");

  const { result } = useContext(CalculatorContext);

  return <p>Result: {result}</p>;
};

export default ShowResult;
