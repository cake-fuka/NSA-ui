import React from "react";

import Video from "./Video";

import GridList from '@material-ui/core/GridList';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export default class Videos extends React.Component {
  constructor() {
    super();
    this.NSA_VIDEO_API = `http://localhost:8080/NSA/video`;

    this.state = {name: "", page: 0, videos: [], isRunning: false};
  }

  newVideo() {
    if(this.state.isRunning) { return; }

    const method = "POST";
    const headers = {
      'Content-Type': 'application/json;charset: utf-8',
    };
    const body = JSON.stringify(
      {
        ...this.state,
        titles: this.state.videos.map((video) => {title: video.title}),
      }
    );

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
            isRunning: false
          }
        );
      })
      .catch((err) => console.error(err))

    this.setState({ ...this.state, isRunning: true });
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
        <GridList padding={10} cellHeight="auto" cols={3}>
          {
            this.buildVideos()
          }
        </GridList>
        <BottomNavigation showLabels>
          <BottomNavigationAction onClick={this.newVideo.bind(this)} label="もっと表示" />} />
        </BottomNavigation>
      </div>
      );
  }
}
