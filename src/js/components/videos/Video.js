import React from "react";


import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(
  theme => ({
    card: {
      padding: theme.spacing(10),
    }
  })
);

const Video = (video, key) => {
  const classes = useStyles();

	return (
    <GridListTile cols={1} key={key}>
	    <Card>
        <CardContent>
          <CardMedia
            component="img"
            alt={video.title}
            height="auto"
            image={video.preview_url.replace("https", "http")}
            title={video.title}
          />
	        <Typography>{video.title}</Typography>
        </CardContent>
	    </Card>
	  </GridListTile>
  )
};

export default Video;
