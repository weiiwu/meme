import React from "react";
import "./Display.css";

const Display = ({ display, textUpperFormat, textLowerFormat }) => {
  console.log(display.upperTextColor);
  return (
    <div className={`card card-content bg-${display.frameColor}`}>
      <div className="memeText text-center">
        <div className="upperText">
          <p
            style={{ fontSize: textUpperFormat, color: display.upperTextColor }}
          >
            {display.upperText}
          </p>
        </div>
        <img
          src={`${display.url}` || "http://via.placeholder.com/400x400"}
          alt="meme-text"
        />
        <div className="lowerText">
          <p
            style={{ fontSize: textLowerFormat, color: display.lowerTextColor }}
          >
            {display.lowerText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Display;
