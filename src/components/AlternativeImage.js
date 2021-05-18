import React, { Fragment } from "react";
import alternative from "./images/no-poster-available.jpg";
import { Link } from "react-router-dom";

const AlternativeImage = () => {
  return (
    <Fragment>
    
      <img
        src={alternative}
        alt="alternative image"
        width="400"
        height="600"
        className="w-full block content-center p-4 alt-image content-image"
      />
     
    </Fragment>
  );
};

export default AlternativeImage;
