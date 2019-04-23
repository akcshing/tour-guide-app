import React from 'react';

const BookingForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const booking = {
      "day": props.booking.day,
      "time": props.booking.time,
      "customer": props.booking.customer,
      "attraction": props.booking.attraction
    }
    this.props.handleBookingPost(booking)
  }

  return(
  <div>
  <form onSubmit={handleSubmit}>
    <h1>I AM FORM</h1>
  </form>
  </div>
)
}

export default BookingForm;
