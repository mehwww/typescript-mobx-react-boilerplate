import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import IndexPage from '@/routes/IndexPage';

class Root extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Root;
