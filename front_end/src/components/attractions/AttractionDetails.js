import React  from 'react';
import {Link} from 'react-router-dom';

const AttractionDetail = (props) => {

  if (!props.attraction) return null;

  const urlPieces = props.attraction._links.self.href.split('/');

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

export default AttractionDetail;
