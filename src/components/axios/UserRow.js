import React, { Component } from "react";

export default class UserRow extends Component {
  render() {
    return (
      <tr onClick={() => this.props.changeUserId(this.props.user.id)}>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.email}</td>
        <td>{this.props.user.phone}</td>
      </tr>
    );
  }
}
