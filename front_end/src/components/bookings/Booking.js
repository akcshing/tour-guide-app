import React from 'react';
import {Link} from 'react-router-dom';


const Booking = ({booking}) => {

  if(!booking) return null;
  console.log(booking);
  const urlPieces = booking._link.self.href.split('/');
  console.log("urlpieces, urlPieces");
  const id = urlPieces[urlPieces.length-1]
  return(
    <React.Fragment>
      <Link to = {"/bookings/" + id}
      className="id">
      {booking.id}
      </Link>
      <p>Day: {booking.day}
      <p>Time Of Day: {booking.timeOfDay}</p>
      <p>Attraction: {booking.attraction}</p>
      <p>Customer: {booking.customer}</p>
      </React.Fragment>
  )

}

export default Booking;
