import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import GridListTile from '@material-ui/core/GridListTile';

const Video = (video, key) => (
	<GridListTile cols={1} key={key}>
	  <Card>
	    <p>{video.title}</p>
	  </Card>
	</GridListTile>
);

export default Video;
