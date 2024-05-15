import React from "react";
import Component3 from "../Component_3/Component3";
import { fetchUserPage2 } from "./../../../stores/userPage2Slice";
import { useDispatch } from "react-redux";

const Component2 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;Component 2</h1>
      <p>
        <button onClick={() => dispatch(fetchUserPage2())}>
          Fetch Users List Page 2
        </button>
      </p>
      <Component3 />
    </div>
  );
};

export default Component2;

/**
 *
 * 1. tạo 1 button "Fetch Users page 2"
 * 2. click button => gọi api để lấy về list users page=2
 * 3. khai báo fetchUserPage2 function
 * 3. tạo mới 1 file userListSlice.js
 * 4. (optional) chỉ hiển thị những thằng nào có id > 9
 */
