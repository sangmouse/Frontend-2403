import React from "react";

const InnerComponent2 = (props) => {
  return (
    <div>
      <div>
        <button onClick={() => props.handleClick(1)}>Page = 1</button>
        <button onClick={() => props.handleClick(2)}>Page = 2</button>
      </div>
      {props?.list?.data?.map((item, index) => {
        return (
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.email}</li>
            <li>{item.first_name}</li>
            <li>{item.last_name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default InnerComponent2;

/**
 * tạo 1 button: Page = 1, Page = 2
 */
