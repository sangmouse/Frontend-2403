import React from "react";
import "./App.css";
import UserPage from "./components/Project-React-Basic/UserPage";
import Component1 from "./components/Redux/Component_1/Component1";
import Cycle from "./components/Cycle";

const App = () => {
  return (
    <div>
      <Component1 />
    </div>
  );
};

export default App;

/**
 *
 * 1. Color.js
 * 2. tạo 1 button - change color, đổi màu của text từ xanh -> đỏ
 * true ? "xanh" : "đỏ"
 * text: lorem ipsum
 *
 * 3. colorSlice
 * store : { status: false }
 */
