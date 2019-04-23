import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'


import CustomerListContainer from './containers/customers/CustomerListContainer'
import CustomerContainer from './containers/customers/CustomerContainer';
import CustomerFormContainer from './containers/customers/CustomerFormContainer';
import CustomerEditFormContainer from './containers/customers/CustomerEditFormContainer';
import BookingListContainer from './containers/bookings/BookingListContainer';


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


            <Route path="/bookings/:id" render = {(props) =>{
              const id = props.match.params.id;
              return<BookingListContainer id = {id} />
            }}/>
              </Switch>
        </React.Fragment>
      </Router>

    );
  }
}

export default App;
