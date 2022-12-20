import React, { Component } from "react";

export default class ComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = { favouriteColor: `red` };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favouriteColor: "green" });
    }, 1000);
  }

  render() {
    return (
      <div>
        componentDidMount<strong> {this.state.favouriteColor}</strong>
      </div>
    );
  }
}
