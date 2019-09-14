import React from "react";

import Header from "./Header";
import Body from "./Body";

import Container from '@material-ui/core/Container';

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Body />
      </Container>
    );
  }
}
