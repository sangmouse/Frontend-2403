import { useState } from "react";
import { ComponentBottom } from "./ComponentBottom";
import ComponentTop from "./ComponentTop";
import "./form-page.css";

const FormPage = () => {
  const [info, setInfo] = useState("");

  const onClick = (info) => {
    console.log("info", info);
    setInfo(info);
  };

  return (
    <div className="form-page">
      <ComponentTop handleClick={onClick} />
      <br />
      <ComponentBottom data={info} />
    </div>
  );
};

export default FormPage;

// ctruyền data từ cha => con : props
// truyền data từ con => cha : lifting state up

// tạo component cha:
//                    InfoPage: + FormComponent
//                              + ResultComponent
