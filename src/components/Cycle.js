/**
 * mounting: install/mount
 * updating
 * re-mounting
 * unmounting
 */

import React, { useEffect, useState } from "react";

const Cycle = () => {
  const [count, setCount] = useState(0); // 1
  console.log("mounting"); // 2

  useEffect(() => {
    console.log("useEffect");
  });

  /**
   * dependencies: [], [state], empty
   */

  return (
    //3
    <div>
      <h1>Cycle</h1>
      <h1>{count}</h1>
      <p>
        <button onClick={() => setCount((state) => state + 1)}>
          Update count
        </button>
      </p>
    </div>
  );
};

export default Cycle;

/**
 *  mounting
 * useEffect
 * mounting
 * 1
 * useEffect
 */
