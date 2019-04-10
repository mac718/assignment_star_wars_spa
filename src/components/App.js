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
import FilmsContainer from '../containers/FilmsContainer';
import StarshipsContainer from '../containers/StarshipsContainer';
import VehiclesContainer from '../containers/VehiclesContainer';
import SpeciesContainer from '../containers/SpeciesContainer';
import ShowContainer from '../containers/ShowContainer';

const NavLinks = () => {
  return (
    <div className='NavLinks'>
      <NavLink activeClassName='active' exact to='/'>
        Home
      </NavLink>
      <NavLink activeClassName='active' exact to='/people'>
        People
      </NavLink>
       <NavLink activeClassName='active' exact to='/films'>
        Films
      </NavLink>
       <NavLink activeClassName='active' exact to='/starships'>
        Starships
      </NavLink>
       <NavLink activeClassName='active' exact to='/vehicles'>
        Vehicles
      </NavLink>
       <NavLink activeClassName='active' exact to='/species'>
        Species
      </NavLink>
       <NavLink activeClassName='active' exact to='/planets'>
        Planets
      </NavLink>
    </div>
  )
}

const App = () => {
  return (
    <div className='container'>
      <Router>
        <NavLinks />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/people' component={PeopleContainer} />
          <Route exact path='/people/:id' component={ShowContainer} />

          <Route exact path='/planets' component={PlanetsContainer} />
          <Route exact path='/planets/:id' component={ShowContainer} />

          <Route exact path='/films' component={FilmsContainer} />
          <Route exact path='/films/:id' component={ShowContainer} />

          <Route exact path='/starships' component={StarshipsContainer} />
          <Route exact path='/starships/:id' component={ShowContainer} />

          <Route exact path='/vehicles' component={VehiclesContainer} />
          <Route exact path='/vehicles/:id' component={ShowContainer} />

          <Route exact path='/species' component={SpeciesContainer} />
          <Route exact path='/species/:id' component={ShowContainer} />
        </Switch>
      </Router>
    </div>
  )
}



export default App;
