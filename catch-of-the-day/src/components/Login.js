import React from "react";
import PropType from "prop-types";

const Login = props => {
  return (
    <nav className="login">
      <h2>Inventory login</h2>
      <p>Sign in to manage inventory</p>
      <button className="github" onClick={() => props.authenticate("Github")}>
        Log in with Github
      </button>
    </nav>
  );
};

Login.propTypes = {
  authenticate: PropType.func.isRequired
};

export default Login;
