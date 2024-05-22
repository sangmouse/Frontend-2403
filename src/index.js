import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { functionA, functionB } from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./stores/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserList from "./components/UserList/UserList";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import LayoutRoot from "./components/LayoutRoot/LayoutRoot";
import UserDetail from "./components/UserDetail/UserDetail";
import StyleModule from "./components/StyleModule/StyleModule";

const router = createBrowserRouter([
  {
    path: "",
    element: <LayoutRoot />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "user-list",
        element: <UserList />,
      },
      {
        path: "user-list/:id",
        element: <UserDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "style-module",
        element: <StyleModule />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
