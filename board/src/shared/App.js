import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { withRouter } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import Header from "../components/Header";
import { Grid, Button, Image, Text } from "../elements/index";
import Write from "../pages/Write";


function App() {
  return (
    <React.Fragment>
      {/* <Header></Header> */}
      <Grid>
        <ConnectedRouter history={history}> 
        {/* ConnectedRouter history={history} 이거 세트임 같이 써야함 */}
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
        </ConnectedRouter>

      </Grid>
            
    </React.Fragment>
  );
}

export default withRouter(App);
