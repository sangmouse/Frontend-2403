import React, { useState } from "react";
import CelciusInput from "./CelciusInput";
import FahrenInput from "./FahrenInput";

const Calculator = () => {
  const [temperature, setTemperature] = useState(0);

  const setData = (data) => {
    setTemperature(Number(data));
  };

  let celcius = temperature;
  let fahren = temperature + 20;

  return (
    <div>
      {/* celcius temperature */}
      <div>
        <fieldset>
          <legend>Enter temperature in celcius</legend>
          <CelciusInput setData={setData} value={celcius} />
        </fieldset>
      </div>
      {/* fahrenheit temperature */}
      <br />
      <div>
        <fieldset>
          <legend>Enter temperature in fahrenheit</legend>
          <FahrenInput setData={setData} value={fahren} />
        </fieldset>
      </div>
    </div>
  );
};

export default Calculator;

/**
 *
 * - Mounting
 * - Updating
 * - Unmounting
 *
 */
