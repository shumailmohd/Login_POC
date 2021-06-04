import React, { Component } from "react";
import { withRouter } from "react-router";

class NewItem extends Component {
  render() {
    return (
      <div>
        <h2>New Item Form</h2>
      </div>
    );
  }
}

export default withRouter(NewItem);
