import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';

import './App.css';

export default function App () {
  return (
    <div className="App">
      <Router>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}
