import React, { Component } from "react";
import styled from "styled-components";

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 60vw;
  font-weight: bold;
  margin-bottom: 0.3rem;
  padding: 0 2rem;

  &:nth-child(even) {
    color: #f0eff4;
  }
`;

class User extends Component {
  render() {
    return (
      <Li>
        <div>{this.props.username}</div>
        <div>{this.props.name}</div>
      </Li>
    );
  }
}

export default User;
