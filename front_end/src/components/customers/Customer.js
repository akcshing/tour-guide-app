import React  from 'react';
import {Link} from 'react-router-dom';

const Customer = ({customer}) => {

  if (!customer) return null;
  console.log(customer);
  return (
    <React.Fragment>
        <Link to = {"/customers/" + customer.id} className="name">
          {customer.name}
        </Link>
      <p>Age: {customer.age}</p>
      <p>Address: {customer.address}</p>
      <p>Tel: {customer.contactNumber}</p>
      <p>Email: {customer.email}</p>

    </React.Fragment>
  )
}

export default Customer;
