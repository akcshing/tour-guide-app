import React from 'react';
import {Link} from 'react-router-dom';


const Booking = ({booking, customer, attraction}) => {

  if(!booking) return null;
  if(!customer) customer = {name: ""};
  if(!attraction) attraction = {name: ""};

  const id = booking.id
  return(
    <div className = "booking-container">
      <Link to = {"/bookings/" + id}
      className="id">
      Booking: {booking.id}
      </Link>
      <p id = "day">Day: {booking.day.toLowerCase()}</p>
      <p id = "time-of-day">Time Of Day: {booking.timeOfDay.toLowerCase()}</p>
      <p>Customer: {customer.name}</p>
      <p>Attraction: {attraction.name}</p>
      </div>
  )

}

export default Booking;
