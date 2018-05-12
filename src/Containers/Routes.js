import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from 'Components/App';
import Dashboard from 'Containers/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/admin/BGC" component={Dashboard} />
    <Route exact path="/admin/database-status" component={Dashboard} />
    <Route exact path="/admin/reports" component={Dashboard} />
    <Route exact path="/admin/batch-upload" component={Dashboard} />
    <Route exact path="/admin/account-settings" component={Dashboard} />
    <Route exact path="/" component={App} />
  </Switch>
);

export default Routes;
