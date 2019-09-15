import React from "react";

import Video from "./Video";

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

export default class Videos extends React.Component {
  constructor() {
    super();
    this.NSA_VIDEO_API = `http://localhost:8080/NSA/video`;

    this.state = {name: "", page: 0, videos: []};
  }

  newVideo() {
    const method = "POST";
    const headers = {
      'Content-Type': 'application/json;charset: utf-8',
    };
    const body = JSON.stringify(
      {
        name: this.state.name,
        page: this.state.page,
        titles: this.state.videos.map((video) => {title: video.title}),
      }
    );
    console.log("body: ", body);

    fetch(
      this.NSA_VIDEO_API,
      {
        method,
        headers,
        body,
      }
    )
      .then((resp) => resp.json())
      .then((json) => {
        this.setState(
          {
            name: json.name,
            page: json.page,
            videos: this.state.videos.concat(json.videos),
          }
        );
      })
      .catch((err) => console.error(err))
  }

  buildVideos() {
    let key = 0;
    console.log(this.state.videos);
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
