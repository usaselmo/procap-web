import React from "react";
import { ListGroup } from "react-bootstrap";

export default class UserList extends React.Component {
  render() {
    if (!this.props.users || this.props.users.length <= 0)
      return "carregando lista de usuarios...";
    let variant = ["primary", "success", "primary", "info"];
    return (
      <div style={{ position: "relative", top: 6 }}>
        <ListGroup as="ul">
          {this.props.users.map((user, index) => (
            <ListGroup.Item
              as="button"
              key={user.id}
              variant={variant[index % 3]}
              action
            >
              {user.nome} {user.sobrenome} - {user.id} - {index} -{" "}
              {variant[index % 3]}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
