import React, { useState } from "react";
import Child2 from "./Child2";
import Child1 from "./Child1";
import { CounterContext } from "../../../context/CounterContext";

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={counter}>
      <div>
        <h1>Home component - Demo Context</h1>
        <Child1 />
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Increment Counter
        </button>
        <Child2 />
      </div>
    </CounterContext.Provider>
  );
};

export default Home;

//

/**
 *
 * Home: + App theme light button / App theme dark button
 *       + component con: Message, Message from grandparents
 *
 */
