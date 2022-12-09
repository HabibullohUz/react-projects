import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class SetState extends Component {
  constructor() {
    super();
    this.state = { mashina: "Cobalt" };
    this.state = { counter: 0 };
  }

  mashinaniYangilash = () => {
    this.setState({ mashina: "Audi" });
  };

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrease = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  degree = () => {
    this.setState({ counter: this.state.counter ** 2 }); //1-usul
    this.setState({ counter: Math.pow(this.state.counter, 2) }); //2-usul
  };

  randomColor = () => {
    const coloredBox = document.querySelector("boxColored");
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    console.log(bgColor);
    coloredBox.style.backgroundColor = bgColor;
  };

  render() {
    return (
      <div className="testContainer">
        <div>I have a {this.state.mashina}</div>
        <Button className="m-2" onClick={() => this.mashinaniYangilash()}>
          Car
        </Button>

        <Button className="m-1" onClick={() => this.increase()}>
          +
        </Button>

        <span>{this.state.counter}</span>

        <Button className="m-1" onClick={() => this.decrease()}>
          -
        </Button>
        <Button className="m-1" onClick={() => this.degree()}>
          ^2
        </Button>

        <div onClick={() => this.randomColor()} className="boxColored"></div>
      </div>
    );
  }
}
