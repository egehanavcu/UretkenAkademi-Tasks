import React, { Component } from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 80%;
  padding: 1.5rem;
  background: #5aa9e6;
  box-shadow: #0353a4 0px 0px 0px 2px inset, #f9f9f9 10px -10px 0px -3px,
    #5aa9e6 10px -10px, #f9f9f9 20px -20px 0px -3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

class Container extends Component {
  render() {
    return <ContainerDiv>{this.props.children}</ContainerDiv>;
  }
}

export default Container;
