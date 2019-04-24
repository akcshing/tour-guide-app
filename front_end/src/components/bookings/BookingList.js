import React from "react";
import BookingContainer from "../../containers/bookings/BookingContainer";

const BookingList = ({bookings}) => {
  if (!bookings) return null;

  const mappedBookings = bookings.map((booking, index) => {
    return <BookingContainer key={index} booking={booking}/>
  })


  return (
    <div className = "booking-list">
    <h1>Bookings</h1>
    {mappedBookings}
    </div>
  )
}

export default BookingList;
