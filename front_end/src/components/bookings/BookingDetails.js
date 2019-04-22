import React from 'react';
import {Link} from 'react-router-dom';

const Booking = (props) => {

  if (!props.booking) return null;

  if(!props.booking) return null;
  console.log(props.booking);
  const urlPieces = props.booking._links.self.href.split('/');
  console.log("urlPieces", urlPieces);
  const id = urlPieces[urlPieces.length-1]

  const.onDelete = () => {
    props.handleDelete(id);
  }

  const onEdit = () => {
    props.handleEdit(id)
  }

}

export default Booking
