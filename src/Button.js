import React, { Component } from "react";
import "./App.css";

class Button extends Component {
  handleClick = () => {};
  render() {
    return (
      <div className="buttons">
        <button className="button__plus" onClick={this.handleClick}>
          +
        </button>
        <button className="button__minus">-</button>
      </div>
    );
  }
}

export default Button;
