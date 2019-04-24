import React  from 'react';
import {Link} from 'react-router-dom';

const Attraction = ({attraction}) => {

  if (!attraction) return null;

  const urlPieces = attraction._links.self.href.split('/');

  const id = urlPieces[urlPieces.length-1]
  return (
    <React.Fragment>
        <Link to = {"/attractions/" + id} className="attraction-name">
          {attraction.name}
        </Link>
      <p></p>
      <img id = "attr-img" src={attraction.pic} alt={attraction.name} ></img>
      <p id = "location" >Location: {attraction.location}</p>
      <p id = "category" >Category: {attraction.category}</p>
      <p id = "description" >Desciption: {attraction.description}</p>
      <p id = "fee" >Fee: {attraction.fee}</p>
      <p id = "accessibility" >Accessibility: {attraction.accessibility.toLowerCase()}</p>
      <p id = "opening-time" >Opening Time: {attraction.openingTime.toLowerCase()}</p>
      <br></br>
      <br></br>


    </React.Fragment>
  )
}

export default Attraction;
