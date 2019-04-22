import React, {Component} from "react";
import {Link} from 'react-router-dom';
import CustomerList from "../../components/bookings/BookingList"
import Request from "../../helpers/request"

class BookingListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: null
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/bookings').then((data) => {
      this.setState({bookings: data._embedded.bookings})
      console.log("hi", data);
    })
  }

  render(){
    console.log("rendering...");
    return(
      <div className="booking-list">
      <h1>Booking List</h1>
      <Link to="/bookings/new">Create Booking</Link>
      <BookingList bookings = {this.state.bookings}/>
      </div>
    )
  }
}

export default BookingListContainer;
