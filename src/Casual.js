import React, { Component } from "react";
import "./App.css";

class Casual extends Component {
  render() {
    return (
      <div className="films square">
        <li className="film__elem">
          <div
            style={{ backgroundColor: "red", width: "100px", height: "100px" }}
          />
        </li>
        <li className="film__elem">
          <div
            style={{
              backgroundColor: "black",
              width: "100px",
              height: "100px"
            }}
          />
        </li>
        <li className="film__elem">
          <div
            style={{
              backgroundColor: "yellow",
              width: "100px",
              height: "100px"
            }}
          />
        </li>
        <li className="film__elem">
          <div
            style={{ backgroundColor: "blue", width: "100px", height: "100px" }}
          />
        </li>
        <li className="film__elem">
          <div
            style={{
              backgroundColor: "green",
              width: "100px",
              height: "100px"
            }}
          />
        </li>
        <li className="film__elem">
          <div
            style={{
              backgroundColor: "purple",
              width: "100px",
              height: "100px"
            }}
          />
        </li>
      </div>
    );
  }
}
export default Casual;
