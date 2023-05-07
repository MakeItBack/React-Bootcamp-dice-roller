import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
   render() {
      return (
         <span className="Die">
            <i
               style={{ color: this.props.colour }}
               className={`Die-icon fas fa-dice-${this.props.num}`}></i>
         </span>
      );
   }
}

export default Die;
