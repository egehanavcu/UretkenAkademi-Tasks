import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Container from "../components/UI/Container";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </React.Fragment>
  );
};

export default RootLayout;
