import React, { useState } from "react";
import "./styles/fragment.css";

function Fragment() {
  const [count, setCount] = useState(1);
  const [userName, setUserName] = useState("");
  //   const [stateName, setStateName] = useState(1)

  const increase = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrease = () => {
    setCount((previousState) => previousState - 1);
  };

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const onSubmit = () => {
    window.alert(userName);
  };

  return (
    <>
      <h1 className={`heading ${count % 2 == 0 ? "odd" : "even"}`}>
        Count: {count}
      </h1>
      <h1 className="heading">
        <button className="btn" onClick={increase} disabled={count >= 10}>
          Increase count ➕
        </button>
      </h1>
      <h1 className="heading">
        <button
          className="btn btn-decrease"
          onClick={decrease}
          disabled={count <= 0}
        >
          Decrease count 🔻
        </button>
      </h1>

      {/* form */}
      <div className="form">
        <div className="form__input">
          <label>User name:</label>
          <input
            placeholder="Typing your name..."
            onChange={onChangeUserName}
            value={userName}
          />
        </div>
        <div>
          <button className="form__btn" onClick={onSubmit}>
            Submit form
          </button>
        </div>
      </div>
    </>
  );
}

export { Fragment };

// state, props
// [1,2,3,4,5], const [a,b ...rest] = [1,2,3,4,5]
// giá trị của count nằm trong khoảng [0, 10] => nếu đến tới hạn thì disable button
// nhập user name vào input, click button => log username
