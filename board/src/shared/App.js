import React from "react";
import { withRouter } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import Header from "../components/Header";
import { Grid, Button, Image, Text } from "../elements/index";
import Write from "../pages/Write";


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Grid>
        <BrowserRouter>
                <Route path="/" exact 
                component={PostList}
                // render={(props) => (
                //   <PostList history={this.props.history}/>
                // )} 
                />
                <Route path="/write" 
                exact component={Write}
                // render={(props) => (
                //   <Write history={this.props.history}/>
                // )} 
                />
            </BrowserRouter>

      </Grid>
            
    </React.Fragment>
  );
}

export default withRouter(App);
