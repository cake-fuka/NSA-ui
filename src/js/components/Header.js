import React from "react";

import GridList from '@material-ui/core/GridList';
import Collection from "./videos/Collection";
import Search from "./videos/Search.jsx";

export default class Header extends React.Component {
  render() {
    return (
      <GridList cellHeight="auto" cols={3}>
        <Collection />
        <Search />
      </GridList>
    );
  }
}
