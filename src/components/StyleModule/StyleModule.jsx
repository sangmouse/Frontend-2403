import React from "react";
import classes from "./StyleModule.module.scss";

// css module, scss module, .scss, .sass

const StyleModule = () => {
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.heading}>Guide style scss module</h1>
        <p className={classes.subHeading}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ducimus sunt delectus, officia numquam culpa nemo mollitia. Magni nam
          corrupti aliquid, cum aperiam beatae, adipisci quas quam ut iure
          suscipit.
        </p>
      </div>
      <div className={classes.title}></div>
    </>
  );
};

export default StyleModule;
