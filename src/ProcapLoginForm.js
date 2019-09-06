import React from "react";
import { Button, Form, FormText, Alert } from "react-bootstrap";
import post from "./functions";

export default class ProcapLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMsg: null };
  }

  componentDidMount() {
    //check user has a valid authentication
  }

  render() {
    return (
      <div>
        <Form>
          <h4 style={{ marginTop: 40 }}>Login</h4>
          <FormText style={{ marginBottom: 20 }}>
            Autorizacao Requerida!
          </FormText>{" "}
          <Alert
            variant="danger"
            show={this.state.errorMsg != null}
            dismissible
          >
            {this.state.errorMsg}
          </Alert>
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
    })
      .then(user => {
        //store user information
        this.props.procapFunctions.logMeIn(user);
      })
      .catch(error => {
        this.setState({
          errorMsg: "Houve um erro: " + error
        });
      });
  };
}
