import React  from 'react';
import {Link} from 'react-router-dom';

const Attraction = ({attraction}) => {

  if (!attraction) return null;

  const urlPieces = attraction._links.self.href.split('/');

  const id = urlPieces[urlPieces.length-1]
  return (
    <React.Fragment>
        <Link to = {"/attractions/" + id} className="name">
          {attraction.name}
        </Link>
      <p>Location: {attraction.location}</p>
      <p>Category: {attraction.category}</p>
      <p>Desciption: {attraction.description}</p>
      <p>Fee: {attraction.fee}</p>
      <p>Accessibility: {attraction.accessibility}</p>
      <p>Opening Time: {attraction.opening_time}</p>

    </React.Fragment>
  )
}

export default Attraction;
