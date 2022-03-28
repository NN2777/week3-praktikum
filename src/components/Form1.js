import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Form.css";

class Form1 extends Component {
  render() {
    return (
      <Form className="wholeform">
        <Form.Group className="groupform" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Input your Username" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="groupform" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Input your Password" />
        </Form.Group>
        <Form.Group className="groupform" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    );
  }
}

export default Form1;
