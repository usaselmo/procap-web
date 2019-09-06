import React from "react";
import { ListGroup } from "react-bootstrap";
import { get } from "./functions";

export default class UserList extends React.Component {
  constructor() {
    super();
    this.state = { users: null };
  }
  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    if (!this.state.users || this.state.users.length <= 0)
      return "carregando lista de usuarios...";
    let variant = ["primary", "success", "danger", "warning"];
    return (
      <div style={{ position: "relative", top: 24 }}>
        <h4>Lista de Usuarios</h4>
        <ListGroup as="ul">
          {this.state.users.map((user, index) => (
            <ListGroup.Item
              as="button"
              key={user.id}
              variant={variant[index % 4]}
              action
            >
              {user.nome} {user.sobrenome} - {user.id} - {index + 1}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }

  /**
   * Custom funtions
   */

  fetchUsers() {
    get("/users").then(data => this.setState({ users: data }));
  }
}
