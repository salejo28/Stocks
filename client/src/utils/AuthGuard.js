import React from 'react'
import { Route, Redirect } from 'react-router-dom'
/* import jwt_Decode from 'jwt-decode' */

const GuardRoute = ({ component: Component, auth, ...rest }) => {
    return <Route {...rest} render={props => (
        auth === true ? <Component {...props} /> : <Redirect to="/auth" />
    )} />
}

export default GuardRoute


/* // function to guard the component for private access
const authGuard = (Component) => () => {
    return localStorage.getItem("token") ? (
      <Component />
    ) : (
      <Redirect to="/login" />
    );
  };
  const Routes = (props) => (
    <Router {...props}>
      <Switch>
        ...
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard" render={authGuard(Dashboard)}> </Route>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route> */