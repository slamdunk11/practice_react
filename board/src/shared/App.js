import React from "react";
import styled from "styled-components";

import {BrowserRouter, Route} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";

import {Grid, Button, Text} from "../elements/index";
import Header from "../components/Header";
import PostList from "../pages/PostList";
import Write from "..pages/PostList";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter>
          <Route path="/" exact component={PostList} />
          <Route path="write" exact component={Write} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
