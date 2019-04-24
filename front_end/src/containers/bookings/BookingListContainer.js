import React, {Component} from "react";
import {Link} from 'react-router-dom';
import BookingList from "../../components/bookings/BookingList"
import Request from "../../helpers/request"

class BookingListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: null
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/bookings').then((data) => {
      this.setState({bookings: data._embedded.bookings})
    })
  }

  render(){
    return(
      <div>
      <h1>Bookings</h1>
      <Link to="/bookings/new">Create Booking</Link>
      <div className="booking-list">
        <BookingList bookings = {this.state.bookings}/>
      </div>
      </div>
    )
  }
}

export default BookingListContainer;
