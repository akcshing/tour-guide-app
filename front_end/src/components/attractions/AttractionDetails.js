import React  from 'react';
import {Link} from 'react-router-dom';

const AttractionDetail = (props) => {

  if (!props) return null;

  const onDelete = () => {
    props.handleDelete(props.attraction.id);
  }

  const onEdit = () => {
    props.handleEdit(props.attraction.id)
  }




  return (
    <React.Fragment>


    </React.Fragment>
  )
}

export default AttractionDetail;
