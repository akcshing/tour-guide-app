import React from 'react';
import {Link} from 'react-router-dom';


const Booking = ({booking}) => {

  if(!booking) return null;
  console.log(booking);
  const id = booking.Id
  return(
    <React.Fragment>
      <Link to = {"/bookings/" + id}
      className="id">
      {booking.Id}
      </Link>
      <p>Day: {booking.day}
      <p>Time Of Day: {booking.timeOfDay}</p>
      <p>Attraction: {booking.attraction}</p>
      <p>Customer: {booking.customer}</p>
      </React.Fragment>
  )

}

export default Booking;
