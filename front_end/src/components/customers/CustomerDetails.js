import React  from 'react';
import {Link} from 'react-router-dom';

const Customer = (props) => {

  if (!props) return null;

  const onDelete = () => {
    props.handleDelete(props.customer.id);
  }

  const onEdit = () => {
    props.handleEdit(props.customer.id)
  }




  return (
    <React.Fragment>


    </React.Fragment>
  )
}

export default Customer;
