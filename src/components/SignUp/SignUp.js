import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  const handleSignnUp = () => {
    if (
      user?.username?.trim().length == 0 ||
      user?.password?.trim().length == 0 ||
      user?.confirmPassword?.trim().length == 0
    ) {
      setMessageError("Please full fill data");
    } else {
      if (user?.password?.trim() !== user?.confirmPassword?.trim()) {
        setMessageError("Password and confirm password not match");
      } else {
        window.localStorage.setItem("username", user?.username?.trim());
        window.localStorage.setItem("password", user?.password?.trim());
        window.localStorage.setItem("status", "sign-up");
        navigate("/login");
        setUser({
          ...user,
          username: "",
          password: "",
          confirmPassword: "",
        });
      }
    }
  };

  return (
    <div className="signup__container">
      <p className="msg__error">{messageError}</p>
      <div id="signup">
        <div className="form__item">
          <label htmlFor="userName">User Name</label>
          <div>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Your user name"
              value={user?.username}
              onChange={(event) => {
                setUser({
                  ...user,
                  username: event.target.value,
                });
                setMessageError("");
              }}
            />
          </div>
        </div>
        <div className="form__item">
          <label htmlFor="password">Pasword</label>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              value={user?.password}
              onChange={(event) => {
                setUser({
                  ...user,
                  password: event.target.value,
                });
                setMessageError("");
              }}
            />
          </div>
        </div>
        <div className="form__item">
          <label htmlFor="confirmPassword">Confirm Pasword</label>
          <div>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Your confirm password"
              value={user?.confirmPassword}
              onChange={(event) => {
                setUser({
                  ...user,
                  confirmPassword: event.target.value,
                });
                setMessageError("");
              }}
            />
          </div>
        </div>
        <div>
          <button type="button" className="form__btn" onClick={handleSignnUp}>
            Sign Up
          </button>
        </div>
        <div
          style={{
            margin: "10px 0 0 0",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/login">If have account, go to login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

/***
 * 1. k nhập đủ thông tin 1 trong các field => show message khi click signup button
 * 2.khi user nhập thông tin => message lỗi hidden
 * 3.nếu password !== confirmPassword => hiển thị password và confirmPassword không trùng nhau
 * 4. lưu lại thông tin signup vào localStorage
 * 5. reset form
 * 6. chuyển đến page login
 */
