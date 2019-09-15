import {parse} from 'querystring'
import React from "react";

import GridListTile from '@material-ui/core/GridListTile';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default class Search extends React.Component {
  constructor() {
    super();

    const params = parse(window.location.search.slice(1));
    this.state = {
      collection: [],
      name: params.name
    }
  }

  handleChange(event) {
    this.setState(
      {
        ...this.state,
        ["name"]: event.target.value
      }
    )
  }

  doSearch(ev) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      window.location.href = `/?name=${this.state.name}`;
    }
  }

  render() {
    return (
      <GridListTile cols={2}>
        <TextField
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.doSearch.bind(this)}
          InputProps={{
            endAdornment: (
              <InputAdornment onClick={this.doSearch.bind(this)}>
                <IconButton onClick={this.doSearch.bind(this)}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </GridListTile>
    );
  }
}
