import React  from 'react';
import {Link} from 'react-router-dom';

const Customer = ({customer}) => {

  if (!customer) return null;
  console.log(customer);
  const urlPieces = customer._links.self.href.split('/');
  console.log("urlpieces", urlPieces);
  const id = urlPieces[urlPieces.length-1]
  return (
    <React.Fragment>
        <Link to = {"/customers/" + id} className="name">
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
