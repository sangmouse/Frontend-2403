import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosGuide = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getUserList = () => {
      axios.get("https://reqres.in/api/unknown").then((res) => {
        setUserList(res?.data?.data);
      });
    };

    getUserList();
  }, []);

  return (
    <div>
      <ul>
        {userList?.map((item) => {
          return (
            <>
              <li>ID: {item?.id}</li>
              <li>Name: {item?.name}</li>
              <li>Color: {item?.color}</li>

              <div>------------------------</div>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default AxiosGuide;
