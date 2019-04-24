import React from 'react';
import {Link} from 'react-router-dom';


const Booking = ({booking, customer, attraction}) => {

  if(!booking) return null;
  if(!customer) customer = {name: ""};
  if(!attraction) attraction = {name: ""};

  const id = booking.id
  return(
    <React.Fragment>
      <Link to = {"/bookings/" + id}
      className="id">
      Booking: {booking.id}
      </Link>
      <p>Day: {booking.day}</p>
      <p>Time Of Day: {booking.timeOfDay}</p>
      <p>Customer: {customer.name}</p>
      <p>Attraction: {attraction.name}</p>
      </React.Fragment>
  )

}

export default Booking;
