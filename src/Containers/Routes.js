import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from 'Components/App';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
);

export default Routes;
