import React from "react";

import Videos from "./videos/Videos";

import Box from '@material-ui/core/Box';

export default class Body extends React.Component {
  render() {
    return (
      <Box>
        <Videos />
      </Box>
    );
  }
}
