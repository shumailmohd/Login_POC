import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewItem from "./NewItem";
import ListItem from "./ListItem";
import NotFound from "./404";
import { withRouter } from "react-router";

class Master extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const { match } = this.props;
    console.log("match", match);
    return (
      <Fragment>
        <h2>Master Item</h2>
        <div className="container">
          <Switch>
            <Route path={`${match.path}/new`} component={NewItem} />
            <Route exact path={`${match.path}`} component={ListItem} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(Master);
