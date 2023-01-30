import React, { Component } from "react";

import Container from "./UI/Container";
import Users from "./Users/Users";
import User from "./Users/User";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles["center-vh"]}>
        <h1>Users</h1>
        <Container>
          <User username="Username" name="Name" />
        </Container>
        <Container>
          <Users />
        </Container>
      </div>
    );
  }
}

export default App;
