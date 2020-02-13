import { Redirect, Route } from "react-router-dom";

import React from "react";
import { connect } from "react-redux";

const CheckAuth = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated === false ? (
        setTimeout(() => <Redirect to="/unauthenticated" />, 4000)
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(CheckAuth);
