import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./productSlider.css";

import prevIcon from "../assets/images/icon-previous.svg";
import nextIcon from "../assets/images/icon-next.svg";

const properties = {
  defaultIndex: 0,
  transitionDuration: 300,
  infinite: true,
  prevArrow: (
    <div
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "white",
        left: "20px",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
      }}
    >
      <img style={{ width: "auto" }} src={prevIcon} alt="previous" />
    </div>
  ),
  nextArrow: (
    <div
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "white",
        right: "20px",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
      }}
    >
      <img style={{ width: "auto" }} src={nextIcon} alt="next" />
    </div>
  ),
};

const ProductSlider = (props) => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {props.imgSrc.map((img, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={img.preview} alt={props.imgSrc.preview} />
            </div>
            <h2>{img.caption}</h2>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ProductSlider;
