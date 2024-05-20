import React, { useState } from "react";
import "./menu.css";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [textMessage, setTextMessage] = useState("Login");
  const menus = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "User List",
      url: "user-list",
    },
  ];

  const isLogin = window.localStorage.getItem("status");

  window.addEventListener("storage", () => {
    if (!window.localStorage.getItem("username")) {
      setTextMessage("Login");
    } else {
      setTextMessage("Sign Out");
    }
  });

  return (
    <div>
      <ul className="menu">
        {menus.map((menu) => {
          return (
            <li key={menu.id}>
              <Link to={menu.url}>{menu.title}</Link>
            </li>
          );
        })}
        <li>
          <button
            style={{
              border: 0,
              background: "transparent",
              cursor: "pointer",
            }}
            onClick={() => {
              if (isLogin == "login") {
                window.localStorage.clear();
              } else {
                navigate("/login");
              }
            }}
          >
            {textMessage}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

/**
 * 1. tạo thêm url sign up
 * 2. tạo component Login, SignUp tương ứng với các route
 */

/**
 *
 * 1. click sign up butto => lấy được thông tin vừa nhập
 * 2. reset form
 * 3. bắt buộc phải nhập đủ thông tin thì mới được, ngược lại
 * hiển thị 1 text là "vui lòng nhập đầy đủ thông tin đăng ký"
 * 4. check nếu pass và confirm pass khác nhau => in ra message lỗi
 */
