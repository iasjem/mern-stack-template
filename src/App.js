import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Login from './components/User/Login.js';
import Signup from './components/User/Signup';
import NotFound from './components/Error/NotFound';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
