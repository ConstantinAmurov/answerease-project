import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
    render() {
        localStorage.removeItem("token");
    return <Redirect to="/login" />;
  }
}

export default Logout;
