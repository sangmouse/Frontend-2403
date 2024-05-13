import React from "react";

export const ComponentBottom = (props) => {
  return (
    <div>
      <h1>Component Bottom</h1>
      <textarea
        rows={10}
        cols={50}
        placeholder="content here"
        value={props.data}
      />
    </div>
  );
};
