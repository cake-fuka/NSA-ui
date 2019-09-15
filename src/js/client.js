import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'

const theme = createMuiTheme({
  palette: {
    type: 'light',
  }
});

const app = document.getElementById('app');
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout />
  </ThemeProvider>
  , app
);
