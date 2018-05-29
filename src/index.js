import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import store, { history } from 'Store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Router, Route, Switch } from 'react-router-dom';

import indexRoutes from 'routes/';

import 'assets/scss/material-dashboard-pro-react.css';

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router history={hist}>
        <Switch>
          {
            indexRoutes.map(prop => (
              <Route path={prop.path} component={prop.component} key={prop.path} />
            ))
          }
        </Switch>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
