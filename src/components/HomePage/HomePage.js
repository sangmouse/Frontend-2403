import { useState } from "react";
import Body1 from "./Body1";
import Footer from "./Footer";
import Header from "./Header";
import "./homepage.css";
import Body2 from "./Body2";
import Body3 from "./Body3";

const HomePage = () => {
  const [bodyVisible, setBodyVisible] = useState(1);

  const bodyRendering = () => {
    if (bodyVisible === 1) {
      return <Body1 />;
    } else if (bodyVisible === 2) {
      return <Body2 />;
    }
    return <Body3 />;
  };

  return (
    <div className="homepage">
      <div className="btn__group">
        <button onClick={() => setBodyVisible(1)}>Display Body 1</button>
        <button onClick={() => setBodyVisible(2)}>Display Body 2</button>
        <button onClick={() => setBodyVisible(3)}>Display Body 3</button>
      </div>
      <Header />
      {/* {bodyVisible ? <Body1 /> : <Body2 />} */}
      {bodyRendering()}
      <Footer />
    </div>
  );
};

export default HomePage;

// true ? "1" : "2"
