import React from "react";

const FahrenInput = (props) => {
  return (
    <div>
      <input
        type="number"
        placeholder="Your fahren here..."
        onChange={(event) => props.setData(event.target.value)}
        value={props.value}
      />
    </div>
  );
};

export default FahrenInput;

/**
 *
 *  B1: lấy được giá trị trong ô input
 * B2: truyền ngược lên component Calculator
 * B3: truyền giá trị từ Calculator vào component TemperatureInput
 *
 */
