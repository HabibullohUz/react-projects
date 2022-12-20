import axios from "axios";
import React, { Component } from "react";

// COMPONENT LIFECYCLE
class Lifecycle extends Component {
  constructor() {
    super();
    console.log("CONSTRUCTOR");
    this.state = { users: [], userEmail: "", userId: 1 };
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => this.setState({ users: res.data }));
  }

  componentDidUpdate() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${this.state.userId}`)
      .then((res) => {
        this.setState({ userEmail: res.data.email });
      });
  }

  componentWillUnmount() /* tugashidan oldin ishga tushadi  */ {
    console.log("COMPONENT WILL UNMOUNT");
  }

  render() {
    console.log("render");
    return (
      <div>
        <span>{this.state.counter}</span>
        <div className="users">
          {this.state.users.map((user) => (
            <h3
              onClick={() => this.setState({ userId: user.id })}
              key={user.id}
            >
              {user.name}
            </h3>
          ))}
        </div>
        <h3>
          <strong>{this.state.userEmail}</strong>
        </h3>
      </div>
    );
  }
}

export default Lifecycle;
