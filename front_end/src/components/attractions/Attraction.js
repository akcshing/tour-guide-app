import React  from 'react';
import {Link} from 'react-router-dom';

const Attraction = ({attraction}) => {

  if (!attraction) return null;

  return (
    <React.Fragment>
        <Link to = {"/attractions/" + attraction.id} className="attraction-name">
          {attraction.name}
        </Link>
      <p></p>
      <img id = "attr-img" src={attraction.pic} alt={attraction.name} ></img>
      <p id = "location" >Location: {attraction.location}</p>
      <p id = "category" >Category: {attraction.category}</p>
      <p id = "description" >Desciption: {attraction.description}</p>
      <p id = "fee" >Fee: {attraction.fee}</p>
      <p id = "accessibility" >Accessibility: {attraction.accessibility}</p>
      <p id = "opening-time" >Opening Time: {attraction.openingTime}</p>
      <br></br>
      <br></br>


    </React.Fragment>
  )
}

export default Attraction;
