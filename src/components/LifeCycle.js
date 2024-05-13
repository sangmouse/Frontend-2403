import React, { useState } from "react";

const LifeCycle = (props) => {
  console.log("... LifeCycle ... ");
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Lifecycle Demo</h1>
      {/* <h1>{counter}</h1>
      <button onClick={() => setCounter((previousState) => previousState + 1)}>
        Update Counter
      </button> */}
      <h1>{props.counter}</h1>
    </div>
  );
};

export default LifeCycle;

// rendering

// component re-render lại khi nào :
// + khi component cha re-rendering
// + khi state thay đổi
// + khi props thay đổi
