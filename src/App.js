import React, { Component } from "react";
import "./App.css";
import Button from "./Button.js";
import Favorite from "./Favorite.js";
import Casual from "./Casual.js";

class App extends Component {
  state = {
    favoriteList: []
  };

  render() {
    const { favoriteList } = this.state;
    return (
      <div className="container">
        <Casual />
        <Button />
        <Favorite list={favoriteList} />
      </div>
    );
  }
}

export default App;
