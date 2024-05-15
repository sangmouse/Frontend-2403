import React from "react";
import { useSelector } from "react-redux";

const Component4 = () => {
  const userList = useSelector((state) => state.user.users);

  const store = useSelector((store) => store);
  return (
    <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Component 4</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Account</th>
          <th>Full Name</th>
          <th>Department</th>
          <th>Position</th>
        </tr>
        {userList?.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.account}</td>
              <td>{item.fullname}</td>
              <td>{item.department}</td>
              <td>{item.position}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Component4;

//
