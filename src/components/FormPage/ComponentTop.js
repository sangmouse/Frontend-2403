import { useState } from "react";

const ComponentTop = (props) => {
  console.log("props", props);
  // props: { handleClick: function }
  const [info, setInfo] = useState("");
  return (
    <div>
      <h1>Component Top</h1>
      <div className="form-wrapper">
        <input
          type="text"
          placeholder="Your name here"
          className="form-page__input"
          value={info}
          onChange={(event) => setInfo(event.target.value)}
        />
        <button
          className="form-page__btn"
          onClick={() => props.handleClick(info)}
        >
          Send data
        </button>
      </div>
    </div>
  );
};

export default ComponentTop;
