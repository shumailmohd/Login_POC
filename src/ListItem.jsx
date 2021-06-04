import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class ListItem extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <Link to={`${match.path}/new`}>New Item</Link>

        <h2>List Item</h2>
      </Fragment>
    );
  }
}

export default ListItem;
