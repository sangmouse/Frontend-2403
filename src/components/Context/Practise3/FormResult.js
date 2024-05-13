import React, { useContext } from "react";
import { FormContext } from "../../../context/FormContext";

const FormResult = () => {
  const currentForm = useContext(FormContext);
  return (
    <div>
      <div>First Name: {currentForm.firstName}</div>
      <div>Last Name: {currentForm.lastName}</div>
      <div>Age: {currentForm.age}</div>
      <div>Address: {currentForm.address}</div>
    </div>
  );
};

export default FormResult;
