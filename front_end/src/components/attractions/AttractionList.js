import React from "react";
import Attraction from "./Attraction";

const AttractionList = ({attractions}) => {
  if (!attractions) return null;
  console.log("hello", attractions);
  const mappedAttractions = attractions.map((attraction, index) => {
    return <Attraction key={index} attraction={attraction}/>
  })
  return (
    <div className = "attraction-list">
    {mappedAttractions}
    </div>
  )
}

export default AttractionList;
