import React from "react";

import Collection from "./videos/Collection.jsx";
import Search from "./videos/Search.jsx";

import GridList from '@material-ui/core/GridList';

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
