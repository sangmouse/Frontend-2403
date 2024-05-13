import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Message = (props) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: currentTheme == "light" ? "white" : "black",
        color: currentTheme == "dark" && "white",
      }}
    >
      {props?.children}
    </div>
  );
};

export default Message;
