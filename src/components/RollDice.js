import React from "react";
import Die from "./Die";
import "../css/RollDice.css";

class RollDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rolling: false,
      dieA: "one",
      dieB: "two",
      dieC: "three",
      dieD: "four",
      dieE: "five",
      dieF: "six",
    };
    this.roll = this.roll.bind(this);
  }
  dies = ["dieA", "dieB", "dieC", "dieD", "dieE", "dieF"];
  faces = [
    { num: "one", colour: "orange" },
    { num: "two", colour: "yellow" },
    { num: "three", colour: "purple" },
    { num: "four", colour: "firebrick" },
    { num: "five", colour: "black" },
    { num: "six", colour: "pink" },
  ];

  roll(event) {
    this.setState({ rolling: true });
    const audio = new Audio("rolling_sound.wav");
    audio.play();
    setTimeout(() => {
      for (const die of this.dies) {
        let index = Math.floor(Math.random() * 6);
        this.setState({ [die]: this.faces[index].num });
      }
      this.setState({ rolling: false });
      audio.pause();
    }, 2000);
  }

  getColour(faceNum) {
    const dieFace = this.faces.find((face) => {
      return face.num === faceNum;
    });
    return dieFace.colour;
  }

  render() {
    return (
      <div>
        <h1 className="RollDice-main-heading">Six Dice Roller</h1>
        <div>
          <Die
            num={this.state.dieA}
            rolling={this.state.rolling}
            colour={this.getColour(this.state.dieA)}
          />
          <Die
            num={this.state.dieB}
            rolling={this.state.rolling}
            colour={this.getColour(this.state.dieB)}
          />
          <Die
            num={this.state.dieC}
            rolling={this.state.rolling}
            colour={this.getColour(this.state.dieC)}
          />
          <Die
            num={this.state.dieD}
            rolling={this.state.rolling}
            colour={this.getColour(this.state.dieD)}
          />
          <Die
            num={this.state.dieE}
            rolling={this.state.rolling}
            colour={this.getColour(this.state.dieE)}
          />
          <Die
            num={this.state.dieF}
            rolling={this.state.rolling}
            colour={this.getColour(this.state.dieF)}
          />
        </div>

        <button
          className="RollDice-button"
          style={{ backgroundColor: this.state.rolling ? "grey" : "rgb(50, 22, 228)" }}
          onClick={this.roll}
          disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling ..." : "Push to roll"}
        </button>
      </div>
    );
  }
}

export default RollDice;
