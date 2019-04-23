import React  from 'react';
import {Link} from 'react-router-dom';

const CustomerDetails = (props) => {

  if (!props.customer) return null;

  if (!props.customer) return null;
  console.log(props.customer);
  const urlPieces = props.customer._links.self.href.split('/');
  console.log("urlpieces", urlPieces);
  const id = urlPieces[urlPieces.length-1]

  const onDelete = () => {
    props.handleDelete(id);
  }

  const onEdit = () => {
    props.handleEdit(id)
  }




  return (
    <React.Fragment>
    <Link to = {"/customers/edit/" + id} className="name">
      Edit
    </Link>
    <button onClick = {onDelete}>Delete</button>

    </React.Fragment>
  )
}

export default CustomerDetails;
