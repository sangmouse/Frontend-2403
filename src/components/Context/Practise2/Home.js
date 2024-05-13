import React, { useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Message from "./Message";

const Home = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={() => setTheme("light")}>Change theme light</button>
        <button onClick={() => setTheme("dark")}>Change theme dark</button>
      </div>
      <Message>Message from grandparents: </Message>
    </ThemeContext.Provider>
  );
};

export default Home;

/**
 *
 * Home : + firstName, lastName, age, address, button submit
 *        + component con: FormResult(First Name: /Last name: ...)
 */
