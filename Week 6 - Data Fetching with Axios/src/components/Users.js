import React, { Component } from "react";
import axios from "axios";

import "./Users.css";

class Users extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  fetchUsers = () => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((response) => {
      let fetchedUsers = [];
      for (const [index, userData] of response.data.entries()) {
        fetchedUsers.push({
          id: index,
          username: userData.username,
          name: userData.name,
        });
        setTimeout(() => {
          this.setState({ users: fetchedUsers });
        }, 1000);
      }
    });
  };

  emptyListToZero = (list) => {
    if (list.length > 0) {
      return list;
    }
    return 0;
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div>
        {this.emptyListToZero(
          this.state.users.map((user) => (
            <li key={user.id} className="user">
              <div>{user.username}</div>
              <div>{user.name}</div>
            </li>
          ))
        ) || "Loading..."}
      </div>
    );
  }
}

export default Users;
