import React, { Component } from "react";
import "./Profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.person = {
      fullName: "bachar ben mamia ",
      bio: "Dj-BeatMaker",
      profession: "Student web development",
      img: "https://fiverr-res.cloudinary.com/image/upload/w_880/f_auto,q_auto/v1/attachments/generic_asset/asset/18dab679d0ea68cf6c6430d77c213230-1664872016381/shutterstock_415922566.jpg",
    };
    this.state = { count: 0 };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 0.5,
      }));
    }, 1000);
  }

  render() {
    return (
      <div className="prof">
        <h1>{this.person.fullName}</h1>
        <h1>{this.person.bio}</h1>
        <h1>{this.person.profession}</h1>
        <img className="tof" src={this.person.img} alt="tof" />
        <h1> {this.state.count} </h1>
      </div>
    );
  }
}