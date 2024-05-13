import React, { useState } from "react";

const FormComponent = (props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <label>User Name: </label>
      <input
        type="text"
        placeholder="Your name here"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={() => props.handleClick(inputValue)}>
        Send data to parent component (info page)
      </button>
    </div>
  );
};

export default FormComponent;
