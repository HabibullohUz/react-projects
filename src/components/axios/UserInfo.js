import axios from "axios";
import React, { Component } from "react";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
      .then((res) => {
        this.setState({ user: res.data });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
        .then((res) => {
          this.setState({ user: res.data });
        });
    }
  }

  render() {
    return (
      <div className="user-info-box">
        {/* <h1 className="user__info-title">User Info</h1>
        <p onClick={() => this.props.changeUserId(this.props.user.id)}>
          <strong>Name:</strong> {this.state.user.name}
        </p>
        <p>
          <strong>Website:</strong> {this.state.user.website}
        </p>
        <p>
          <strong>Phone:</strong> {this.state.user.phone}
        </p>
        <p>
          <strong>Email:</strong> {this.state.user.email}
        </p> */}
      </div>
    );
  }
}