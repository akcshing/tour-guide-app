import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

import CustomerListContainer from './containers/customers/CustomerListContainer'
import CustomerContainer from './containers/customers/CustomerContainer';
import CustomerFormContainer from './containers/customers/CustomerFormContainer';
import CustomerEditFormContainer from './containers/customers/CustomerEditFormContainer';
import BookingListContainer from './containers/bookings/BookingListContainer';

import AttractionListContainer from './containers/attractions/AttractionListContainer'
import AttractionContainer from './containers/attractions/AttractionContainer';
import AttractionFormContainer from './containers/attractions/AttractionFormContainer';
import AttractionEditFormContainer from './containers/attractions/AttractionEditFormContainer';


import BookingContainer from './containers/bookings/BookingContainer';
import BookingFormContainer from './containers/bookings/BookingFormContainer';
import BookingEditFormContainer from './containers/bookings/BookingEditFormContainer';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path = '/customers' component={CustomerListContainer}/>
            <Route exact path = '/customers/new' component={CustomerFormContainer}/>
            <Route exact path="/customers/edit/:id" render = {(props) =>{
              const id = props.match.params.id;
              return <CustomerEditFormContainer id = {id} />
            }}
            />
            <Route exact path="/customers/:id" render = {(props) =>{
              const id = props.match.params.id;
              return <CustomerContainer id = {id} />
            }}
            />

            <Route exact path = '/attractions' component={AttractionListContainer}/>
            <Route exact path = '/attractions/new' component={AttractionFormContainer}/>
            <Route exact path="/attractions/edit/:id" render = {(props) =>{
              const id = props.match.params.id;
              return <AttractionEditFormContainer id = {id} />
            }}
            />
            <Route exact path="/attractions/:id" render = {(props) =>{
              const id = props.match.params.id;
              return <AttractionContainer id = {id} />
            }}
            />

            <Route exact path = '/bookings/new' component={BookingFormContainer}/>

            <Route exact path = '/bookings' component={BookingListContainer}/>

            <Route exact path = '/bookings/:id' render = {(props) =>{
              const id = props.match.params.id;
              return <BookingContainer id = {id}/>
            }}
            />

            <Route exact path="/bookings/edit/:id" render = {(props) =>{
              const id = props.match.params.id;
              return <BookingEditFormContainer id = {id} />
            }}
            />

          </Switch>
        </React.Fragment>
      </Router>

    );
  }
}

export default App;
