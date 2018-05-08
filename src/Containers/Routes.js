import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from 'Components/App';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={'/'} component={App} />
      </Switch>);
  }
}

export default Routes;
