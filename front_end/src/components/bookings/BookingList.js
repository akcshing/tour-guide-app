import React from "react";
import Booking from "./Booking";

const BookingList = ({bookings}) => {
  if (!bookings) return null;
  console.log("hello from BookingList", bookings);
  const mappedBookings = bookings.map((booking, index) => {
    return <Booking key={index} booking={booking}/>
  })
  return (
    <div className = "booking-list">
    {mappedBookings}
    </div>
  )
}

export default BookingList;
