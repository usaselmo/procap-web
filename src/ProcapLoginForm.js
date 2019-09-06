import React from "react";
import { Button, Form, FormText } from "react-bootstrap";
import post from "./functions";

export default class ProcapLoginForm extends React.Component {
  email = "";
  render() {
    return (
      <div>
        <Form>
          <h4 style={{ marginTop: 40 }}>Login</h4>
          <FormText style={{ marginBottom: 20 }}>
            Autorizacao Requerida!
          </FormText>
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              onInput={e => (this.email = e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
          <Button placeholder="Login" onClick={this.handleLoginForm}>
            Login
          </Button>
        </Form>
      </div>
    );
  }

  handleLoginForm = () => {
    post("/users/login", {
      id: 1,
      nome: "Usuario",
      sobrenome: "De Teste"
    }).then(data => this.props.procapFunctions.logMeIn(data));
  };
}
