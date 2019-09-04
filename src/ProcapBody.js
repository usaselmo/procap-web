import React from "react";
import { ListGroup } from "react-bootstrap";
import UserList from "./UserList";

class ProcapBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: null };
  }

  componentDidMount() {
    fetchUsers(this);
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default ProcapBody;

/*
 *
 * End of Class and begining of functions
 *
 */

const procap_server_url = "https://procap-server.herokuapp.com/private/api";

function fetchUsers(t: React.Component) {
  fetch(procap_server_url + "/users", {
    header: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(data => t.setState({ users: data }));
}
