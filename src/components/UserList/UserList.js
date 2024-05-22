import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../stores/userSlice";
import { Link } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((store) => store.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>User List Page</h1>
      <ul>
        {userList?.map((item) => {
          return (
            <li>
              <p>ID: {item?.id}</p>
              <p>Email: {item?.email}</p>
              <p>
                <Link to={`${item?.id}`}>View detail</Link>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
