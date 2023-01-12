import React, { Component } from "react";
import Profile from "./Component/Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  Toggle = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <button className="ShowHide" onClick={this.Toggle}>Show/Hide</button>
        {this.state.show && <Profile />}
      </div>
    );
  }
}