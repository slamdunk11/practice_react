import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import Header from "../components/Header";
import { Grid, Button, Image, Text } from "../elements/index";
import Write from "../pages/Write";

function App() {
  return (
    <React.Fragment>
       <Grid>
            <Header></Header>
            <BrowserRouter>
                <Route path="/" exact component={PostList} />
                <Route path="write" exact component={Write} />
            </BrowserRouter>
        </Grid>
    </React.Fragment>
  );
}

export default App;
