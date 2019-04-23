import React from 'react';

const BookingForm = (props) => {

  if (!props.customers) return null;
  if (!props.attractions) return null;

  console.log("i am form props", props);

  const allCustomers = props.customers.map((customer, index) => {
    return <option key={index} value={index}>{customer.name}</option>
  })
  const allAttractions = props.attractions.map((attraction, index) => {
    return <option key={index} value={index}>{attraction.name}</option>
  })

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

  function handleCustomerSelect(event){
    props.handleCustomerSelect(event.target.value);
  }

  function handleAttractionSelect(event){
    props.handleAttractionSelect(event.target.value);
  }

  return(
    <div>
    <form onSubmit={handleSubmit}>
    <select onChange= {handleCustomerSelect} name="customer-options">
    {allCustomers}
    </select>
    <select onChange= {handleAttractionSelect} name="attraction-options">
    {allAttractions}
    </select>
    <button type="submit">submit</button>
    </form>
    </div>
  )
}

export default BookingForm;
