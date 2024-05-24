import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
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
import AxiosGuide from "./components/Axios/AxiosGuide";
import Footer from "./components/Footer/Footer";

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
      {
        path: "axios",
        element: <AxiosGuide />,
      },
      {
        path: "footer",
        element: <Footer />,
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
