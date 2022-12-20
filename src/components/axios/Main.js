import axios from "axios";
import React, { Component } from "react";
import UserInfo from "./UserInfo";
import UserTable from "./UserTable";

class Main extends Component {
  constructor() {
    super();
    this.state = { users: [], userId: 1 };
  }

  changeUserId = (id) => {
    this.setState({ userId: id })
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <>
        <div className="main">
          <UserTable changeUserId={this.changeUserId} users={this.state.users} />
          <UserInfo changeUserId={this.changeUserId} userId={this.state.userId}
          />
        </div>
      </>
    );
  }
}

export default Main;
