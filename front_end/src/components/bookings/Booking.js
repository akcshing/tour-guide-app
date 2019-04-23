import React from 'react';
import {Link} from 'react-router-dom';


const Booking = ({booking, customer, attraction}) => {

  if(!booking) return null;
  if(!customer) return null;


  console.log(booking);
  console.log("booking's customer:", customer);
  const id = booking.id
  return(
    <React.Fragment>
      <h1>Hello booking</h1>
      <Link to = {"/bookings/" + id}
      className="id">
      {booking.id}
      </Link>
      <p>Day: {booking.day}</p>
      <p>Time Of Day: {booking.timeOfDay}</p>
      <p>{customer.name}</p>
      <p>{attraction.name}</p>
      </React.Fragment>
  )

}

export default Booking;
