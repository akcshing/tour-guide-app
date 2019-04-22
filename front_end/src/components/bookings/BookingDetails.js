import React from 'react';
import {Link} from 'react-router-dom';

const Booking = (props) => {

  if (!props) return null;

  const onDelte = () =>{
    prop.handleDelete(props.bookings.id);
  }

  const onEdit = () => {
    props.handleEdit(props.bookings.id)
  }

  return (
    <React.Fragment>

    </React.Fragment>
  )
}

export default Booking
