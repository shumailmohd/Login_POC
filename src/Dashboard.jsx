import React, { Component } from "react";
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Master from "./Master";
import Pos from "./Pos";
import IndexDashboard from "./IndexDashboard";
import NotFound from "./404";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <ul>
            <li>
              <Link to={`${match.path}`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`${match.path}/master`}>Master</Link>
            </li>
            <li>
              <Link to={`${match.path}/pos`}>Pos</Link>
            </li>
            <li onClick={this.signOut}>signOut</li>
          </ul>
          <main role="main">
            <div className="main">
              <Switch>
                <Route path={`${match.path}/master`}>
                  <Master />
                </Route>
                <Route path={`${match.path}/pos`}>
                  <Pos />
                </Route>
                <Route exact path={`${match.path}`}>
                  <IndexDashboard />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(Dashboard);
