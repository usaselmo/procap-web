import React from "react";
import "./Procap.css";
import ProcapHeader from "./ProcapHeader";
import ProcapBody from "./ProcapBody";
import { Container } from "react-bootstrap";

class Procap extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
          <ProcapHeader />
          <ProcapBody />
        </Container>
      </div>
    );
  }
}

export default Procap;
