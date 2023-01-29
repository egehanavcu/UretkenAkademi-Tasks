import React, { Component } from "react";

import Container from "./Container";
import Users from "./Users";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="center-vh">
        <h1>Users</h1>
        <Container>
          <ul>
            <li className="user">
              <div>Username</div>
              <div>Name</div>
            </li>
          </ul>
        </Container>
        <Container>
          <ul>
            <Users />
          </ul>
        </Container>
      </div>
    );
  }
}

export default App;
