import React, { Component } from "react";
// import UserRow from "./UserRow";
// import bgImg from './assets/bg-line.svg'

export default class UserTable extends Component {
  render() {

    return (
      <>
        {/* <div className="usersTable__container">
          <div className="user__wrapper">
            <img src={bgImg} alt="" />
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Tel</th>
                </tr>
              </thead>
              <tbody>
                {this.props.users.map((user) => {
                  return (
                    <UserRow
                      key={user.id}
                      user={user}
                      changeUserId={this.props.changeUserId}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div> */}
      </>
    );
  }
}
