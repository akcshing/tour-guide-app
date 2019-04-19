import React from "react";
import {Link} from 'react-router-dom';

const CreateLink = ({link}) => {
  return <Link to={link + "/new"}>Create {link}</Link>
}

export default CreateLink;
