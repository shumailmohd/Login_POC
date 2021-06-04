import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Redirect } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };
  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "123") {
      localStorage.setItem("token", "2f77613b40e8a6f33fd1be1abed83a12");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <Form onSubmit={this.login} className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="user_id"
            onChange={this.handleFormChange}
            placeholder="Enter Username"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="user_password"
            onChange={this.handleFormChange}
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>user_id === "admin" && user_password === "123"</p>
      </Form>
    );
  }
}
export default Login;
