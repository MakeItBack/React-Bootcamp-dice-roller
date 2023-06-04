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
  roll(event) {
    const nums = ["", "one", "two", "three", "four", "five", "six"];
    const dies = ["dieA", "dieB", "dieC", "dieD", "dieE", "dieF"];
    for (const die of dies) {
      let num = Math.floor(Math.random() * 6) + 1;
      this.setState({ [die]: nums[num] });
    }
  }

  render() {
    return (
      <div>
        <h1>Six Dice Roller</h1>
        <div>
          <Die num={this.state.dieA} colour="orange" />
          <Die num={this.state.dieB} colour="yellow" />
          <Die num={this.state.dieC} colour="purple" />
          <Die num={this.state.dieD} colour="red" />
          <Die num={this.state.dieE} colour="black" />
          <Die num={this.state.dieF} colour="pink" />
        </div>

        <button onClick={this.roll}>Push to Roll</button>
      </div>
    );
  }
}

export default RollDice;
