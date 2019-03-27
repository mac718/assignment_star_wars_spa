import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Home from './Home';
import PeopleContainer from '../containers/PeopleContainer';
import PlanetsContainer from '../containers/PlanetsContainer';

const NavLinks = () => {
  return (
    <div className='NavLinks'>
      <NavLink activeClassName='active' exact to='/'>
        Home
      </NavLink>{'  '}
      <NavLink activeClassName='active' exact to='/people'>
        People
      </NavLink>{'  '}
       <NavLink activeClassName='active' exact to='/films'>
        Films
      </NavLink>{'  '}
       <NavLink activeClassName='active' exact to='/starships'>
        Starships
      </NavLink>{'  '}
       <NavLink activeClassName='active' exact to='/vehicles'>
        Vehicles
      </NavLink>{'  '}
       <NavLink activeClassName='active' exact to='/species'>
        Species
      </NavLink>{'  '}
       <NavLink activeClassName='active' exact to='/planets'>
        Planets
      </NavLink>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <NavLinks />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/people' component={PeopleContainer} />
        <Route exact path='/planets' component={PlanetsContainer} />
      </Switch>
    </Router>
  )
}



export default App;
