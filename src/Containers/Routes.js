import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from 'Containers/Dashboard';
import DashboardBGC from 'components/DashboardBGC';
import Reports from 'components/Reports';

const Routes = () => (
  <Switch>
    <Route exact path="/admin/BGC" render={props => (<Dashboard><DashboardBGC {...props} /></Dashboard>)} />
    <Route exact path="/admin/database-status" component={Dashboard} />
    <Route exact path="/admin/reports"render={props => (<Dashboard><Reports {...props} /></Dashboard>)} />
    <Route exact path="/admin/batch-upload" component={Dashboard} />
    <Route exact path="/admin/account-settings" component={Dashboard} />
    <Redirect to="/admin/BGC" />
  </Switch>
);

export default Routes;
