import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class PrevState extends Component {
  constructor() {
    super();
    this.state = { mashina: "Cobalt" };
    this.state = { counter: 0 };
  }

  mashinaniYangilash = () => {
    this.setState(() => ({
      counter: "Audi",
    }));
  };

  increase = () => {
    this.setState((PrevState) => ({ counter: PrevState.counter + 1 }));
  };

  decrease = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  degree = () => {
    this.setState((prevState) => ({ counter: prevState.counter * 2 }));
  };

  render() {
    return (
      <div>
        <p>I will buy a {this.state.mashina}</p>
        <p>{this.state.counter}</p>
        <Button onClick={this.mashinaniYangilash}>Car</Button>
        <Button onClick={this.increase}>+</Button>
        <Button onClick={this.decrease}>-</Button>
        <Button onClick={this.degree}>^2</Button>
      </div>
    );
  }
}
