import React, { Component } from "react";
import axios from "axios";

import User from "./User";
import styled from "styled-components";

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

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
      <Ul>
        {this.emptyListToZero(
          this.state.users.map((user) => (
            <User key={user.id} username={user.username} name={user.name} />
          ))
        ) || "Loading..."}
      </Ul>
    );
  }
}

export default Users;
