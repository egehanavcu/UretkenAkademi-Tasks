import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <li>
        <div>{this.props.username}</div>
        <div>{this.props.name}</div>
      </li>
    );
  }
}

export default User;
