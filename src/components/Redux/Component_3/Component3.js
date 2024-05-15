import React from "react";
import Component4 from "../Component_4/Component4";

const Component3 = () => {
  return (
    <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Component 3</h1>
      <Component4 />
    </div>
  );
};

export default Component3;

/**
 * 1. tạo 1 button Get User List page 1
 * 2. click button => gọi api lấy về list User
 * 3. lưu data từ api vào store
 * 4. tạo mới 1 component DataRender trong folder components
 * 5. lấy data user list page 1 từ store hiển thị lên giao diện
 * 6. chỉ hiển thị user nào có id < 4 (optional)
 */
