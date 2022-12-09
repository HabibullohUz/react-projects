import React, { Component } from "react";

class Toggle extends Component {
  constructor() {
    super();
    this.state = { isVisible: true, isNightMode: false };
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  mode = () => {
    this.setState((prevState) => ({ isNightMode: !prevState.isNightMode }));
  };

  render() {
    return (
      <div className="mode__body">
        <form action="mode">
          <input type="radio" id="night" name="mode" /> 
          <label for="night">night</label>
          <input type="radio" id="light" name="mode" /> 
          <label for="light">light</label>
        </form>
        <h1>{this.setState.isVisible}</h1>
        <button onClick={() => this.toggleVisibility()}>Toggle</button>
      </div>
    );
  }
}

export default Toggle;
