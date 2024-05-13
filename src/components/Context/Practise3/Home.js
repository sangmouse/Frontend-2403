import React, { useState } from "react";
import "./context-form.css";
import { FormContext } from "../../../context/FormContext";
import FormResult from "./FormResult";

const Home = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
  });

  return (
    <FormContext.Provider value={form}>
      <div className="context-form">
        <h1>Form Context</h1>
        <div>
          <div>
            <p>First Name</p>
            <input
              type="text"
              placeholder="Your first name"
              value={form.firstName}
              onChange={(event) =>
                setForm({
                  ...form,
                  firstName: event.target.value,
                })
              }
            />
          </div>
          <div>
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Your last name"
              value={form.lastName}
              onChange={(event) =>
                setForm({
                  ...form,
                  lastName: event.target.value,
                })
              }
            />
          </div>
          <div>
            <p>Age</p>
            <input
              type="number"
              placeholder="Your age"
              value={form.age}
              onChange={(event) =>
                setForm({
                  ...form,
                  age: event.target.value,
                })
              }
            />
          </div>
          <div>
            <p>Address</p>
            <textarea
              placeholder="Your address"
              cols={50}
              rows={10}
              value={form.address}
              onChange={(event) =>
                setForm({
                  ...form,
                  address: event.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <FormResult />
    </FormContext.Provider>
  );
};

export default Home;
