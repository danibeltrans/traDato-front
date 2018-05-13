import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from 'Containers/Dashboard';

const PrivateRoute = ({
  component: Component, isAuth, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      const { location: { pathname } } = props;
      return (isAuth ?
        <Dashboard><Component {...props} /></Dashboard> :
        <Redirect to={{ pathname: '/login', state: { from: pathname } }} />);
    }}
  />
);

const mapStateToProps = state => ({
  ...state.user,
});

export default connect(mapStateToProps)(PrivateRoute);
