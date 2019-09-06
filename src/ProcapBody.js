import React from "react";
import UserList from "./UserList";
import ProcapLoginForm from "./ProcapLoginForm";

class ProcapBody extends React.Component {
  render() {
    if (!this.props.procapProps.loggedIn)
      return (
        <ProcapLoginForm
          procapProps={this.props.procapProps}
          procapFunctions={this.props.procapFunctions}
        />
      );
    else
      return (
        <UserList
          procapProps={this.props.procapProps}
          procapFunctions={this.props.procapFunctions}
        />
      );
  }
}

export default ProcapBody;
