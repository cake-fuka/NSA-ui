import React from "react";

import Video from "./Video";

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

export default class Videos extends React.Component {
  constructor() {
    super();
    this.state = {page: 0, videos: []};
  }

  newVideo() {
    let query = {name: "", page: this.state.page, videos: this.state.videos};
    let resp = {page: 0, videos: [{title: "title"}, {title: "title2"}, {title: "title3"}]};

    this.setState(
      {
        page: resp.page,
        videos: this.state.videos.concat(resp.videos),
      }
    );
  }

  buildVideos() {
    let key = 0;
    return (
      this.state.videos.map((video) => Video(video, key++))
    );
  }

  render() {
    const query = window.location.search;
    return (
      <div>
        <GridList cellHeight="auto" cols={3}>
          {
            this.buildVideos()
          }
        </GridList>
        <button onClick={this.newVideo.bind(this)}>button</button>
      </div>
    );
  }
}
