import React from "react";
import "./Procap.css";
import ProcapHeader from "./ProcapHeader";
import ProcapBody from "./ProcapBody";
import { Container } from "react-bootstrap";

class Procap extends React.Component {
  constructor() {
    super();
    this.state = {
      procapProps: { loggedIn: false, user: null },
      procapFunctions: { logMeIn: this.logMeIn }
    };
  }
  render() {
    return (
      <div className="App">
        <Container>
          <ProcapHeader />
          <ProcapBody
            procapProps={this.state.procapProps}
            procapFunctions={this.state.procapFunctions}
          />
        </Container>
      </div>
    );
  }

  logMeIn = user => {
    this.setState({
      procapProps: { loggedIn: true, user: user }
    });
  };
}

export default Procap;
