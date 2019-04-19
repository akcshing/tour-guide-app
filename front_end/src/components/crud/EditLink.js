import React from "react";
import {Link} from 'react-router-dom';

const EditLink = ({link}) => {
  return <Link to={link + "/edit"}>Edit}</Link>
}

export default EditLink;
