import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import './App.css';
import Login from './components/login';
import Dashboard from './components/dashboard';
import ListingPage from './components/listingPage';
import { Nav, NavItem, NavLink } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Nav>
        <NavLink href="#/">Register</NavLink>
        <NavLink href="#/dashboard">Dashboard</NavLink>
        <NavLink href="#/listing">Lisitng</NavLink>
      </Nav>
      <Router>
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} />} />
            <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
            <Route exact path="/listing" render={(props) => <ListingPage {...props} />} />
            <Route render={ () => <Redirect to="/" /> } />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
