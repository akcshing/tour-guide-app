import React  from 'react';


const CustomerDetails = (props) => {

  if (!props.customer) return null;

  if (!props.customer) return null;

  const urlPieces = props.customer._links.self.href.split('/');

  const id = urlPieces[urlPieces.length-1]

  const onDelete = () => {
    props.handleDelete(id);
  }

  const onEdit = () => {
    props.handleEdit(id)
  }




  return (
    <React.Fragment>
    <button onClick = {onEdit}>Edit</button>
    <button onClick = {onDelete}>Delete</button>
    </React.Fragment>
  )
}

export default CustomerDetails;
