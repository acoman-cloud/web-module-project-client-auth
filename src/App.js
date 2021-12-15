import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

import PrivateRoute from './components/PrivateRoute';

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
      </div>
       <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
           <li>
            { isLoggedIn && <Link to="/logout">Logout</Link> }
          </li>
          <li>
            { isLoggedIn && <Link to="/friends">Friends</Link> }
          </li>
          <li>
            { isLoggedIn && <Link to="/friends/add">Add Friend</Link> }
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/friends/add" component={AddFriend} />
          <PrivateRoute path="/friends" component={FriendsList} />
          <PrivateRoute path='/logout' component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
    </Router>
  );
}

export default App;
