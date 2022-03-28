import React, { Component } from "react";
import Form1 from "./Form1";
import Card from "react-bootstrap/Card";
import "./Card.css";

class Card1 extends Component {
  render() {
    return (
      <Card className="card-1">
        <Card.Header align="Center">
          <Card.Title>Login Form</Card.Title>
        </Card.Header>
        <div align="center" class="mt-5">
          <h1>
            Assignment <br></br> Week 3
          </h1>
        </div>
        <Form1 />
      </Card>
    );
  }
}

export default Card1;
