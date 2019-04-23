import React from 'react';
import {Link} from 'react-router-dom';


const Booking = ({booking}) => {

  if(!booking) return null;
  console.log(booking);
  const id = booking.Id
  return(
    <React.Fragment>
    <h1>Hello booking</h1>
      <Link to = {"/bookings/" + id}
      className="id">
      {booking.Id}
      </Link>
      <p>Day: {booking.day}</p>
      <p>Time Of Day: {booking.timeOfDay}</p>
      <a href={booking._links.attraction.href}>Attraction:{booking._links.attraction.href}</a>
      <a>Customer: {booking._links.customer.href}</a>
      </React.Fragment>
  )

}

export default Booking;
