import React from 'react',

const BookingForm = (props) => {

  const options = props.customers.map((customer, index) => {
    return<option value = {index} key={index}>{customer.name}</option>
  })

  return (
    <select id ="customer-selector" defaultValue="default">
    <option disabled value="default">Choose a Customer</option>
    {options}
    </select>

  )

}

export default BookingForm
