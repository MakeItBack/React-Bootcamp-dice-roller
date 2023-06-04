import React from "react";
import "../css//Die.css";

const Die = (props) => {
  return (
    <span className="Die">
      <i
        style={{ color: props.colour }}
        className={`Die-icon fas fa-dice-${props.num} ${props.rolling && "Die-rolling"}`}></i>
    </span>
  );
};

export default Die;
