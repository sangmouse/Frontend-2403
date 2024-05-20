import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

// const userProptotype = { username: "anhdt12", password: "Password123456@@" };

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [messageError, setMessageError] = useState("");

  console.log("user", user);

  const handleLogin = () => {
    if (
      user?.username?.trim()?.length == 0 ||
      user?.password?.trim()?.length == 0
    ) {
      setMessageError("Please full fill data");
    } else {
      if (
        user?.username?.trim() !== window.localStorage.getItem("username") ||
        user?.password?.trim() !== window.localStorage.getItem("password")
      ) {
        setMessageError("Incorrect login information");
      } else {
        window.localStorage.setItem("status", "login");
        navigate("/");
        setUser({
          ...user,
          username: "",
          password: "",
        });
      }
    }
  };

  return (
    <div className="login__container">
      <p className="msg__error">{messageError}</p>
      <div id="login">
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
        <div>
          <button type="button" className="form__btn" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div
          style={{
            margin: "10px 0 0 0",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/sign-up">If don't have account yet, go to sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

/**
 *
 * 1. ko nhập username || password => show message lỗi khi click login button
 * 2. khi user nhập thông tin => message lỗi hidden
 * 3. nếu thông tin đăng nhập không giống {username: "anhdt12", password: "Password123456@@"} => show message "thông tin đăng nhập không đúng"
 * 4. nếu đăng nhập success => chuyển đến trang home
 * 5. reset form
 */
