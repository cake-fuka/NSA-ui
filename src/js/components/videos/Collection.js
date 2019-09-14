import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';


export default class Collection extends React.Component {
  constructor() {
    super();
    const page = "0";
    const limit = "70";
    const AVGLE_COLLECTION_API = `https://api.avgle.com/v1/collections/${page}?limit=${limit}`;

    this.state = {
      collection: [],
      anchorEl: null
    }

    fetch(AVGLE_COLLECTION_API)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState(
          {
            ...this.state,
            collection: json.response.collections.map((resp) => resp.title)
          }
        );
      })
      .catch((err) => {
      });
  }

  setAnchorEl(target) {
    this.setState(
      {
        ...this.state,
        anchorEl: target
      }
    );
  }

  handleClick(event) {
    this.setAnchorEl(event.currentTarget);
  }

  handleClose(event) {
    this.setAnchorEl(null);
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClick.bind(this)}
        >
          誰の動画みたい？
        </Button>
        {
          <Menu
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose.bind(this)}
          >
            {
              this.state.collection.map((c) =>
                (
                  <MenuItem key={c} onClick={this.handleClose.bind(this)}>
                    <ListItemText primary={c} href={`/?name=${c}`}/>
                  </MenuItem>
                )
              )
            }
          </Menu>
        }
      </div>
    );
  }
}
