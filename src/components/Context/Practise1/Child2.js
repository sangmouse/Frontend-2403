import React from "react";
import { useContext } from "react";
import { CounterContext } from "../../../context/CounterContext";

const Child2 = () => {
  const currentContext = useContext(CounterContext);

  return (
    <div>
      <p>Chidlren 2 component</p>
      <h1>Counter: {currentContext}</h1>
    </div>
  );
};

export default Child2;
