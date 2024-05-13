import React, { useEffect, useState } from "react";
import InnerComponent from "./InnerComponent";

const OuterComponent = () => {
  const [userList, setUserList] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(1);

  const callApi = async () => {
    const data = await fetch(`https://reqres.in/api/users?page=${pageNumber}`);
    const result = await data.json();
    setUserList(result);
  };

  const handleClick = (number) => {
    setPageNumber(number);
  };

  useEffect(() => {
    callApi();
  }, [pageNumber]);

  return (
    <div>
      <h1>Outer Component</h1>
      <InnerComponent list={userList} handleClick={handleClick} />
    </div>
  );
};

export default OuterComponent;
