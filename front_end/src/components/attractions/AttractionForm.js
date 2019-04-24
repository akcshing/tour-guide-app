import React from 'react';
import {accessabilityArr, timeOfDayArr} from "../../helpers/enums"

const AttractionForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();
    const attraction = {
        "name": event.target.name.value,
        "location": event.target.location.value,
        "category": event.target.category.value,
        "description": event.target.description.value,
        "fee": event.target.fee.value,
        "pic": event.target.pic.value,
        "accessibility": event.target.accessibility.value,
        "opening_time": event.target.openingTime.value

      }

      props.handleAttractionPost(attraction)

  }

  const accessibilityOptions = accessabilityArr.map((accessibility, index) => {
    return <option key={index} value={accessibility.value}>{accessibility.displayName}</option>
  })
  const timeOfDayOptions = timeOfDayArr.map((time, index) => {
    return <option key={index} value={time.value}>{time.displayName}</option>
  })



      return (
        <div id = "create-attraction-container">
          <h3>Create Attraction</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name"/>
            <br></br>
            <input type="text" placeholder="Location" name="location"/>
            <br></br>
            <input type="text" placeholder="Category" name="category"/>
            <br></br>
            <input type="text" placeholder="Description" name="description"/>
            <br></br>
            <input type="number" placeholder="Fee" name="fee"/>
            <br></br>
            <input type="text" placeholder="Pic url" name="pic"/>
            <br></br>
            <label>Accessibility: </label>
            <select name="accessibility">
            {accessibilityOptions}
            </select>
            <br></br>
            <label>Opening Time: </label>
            <select name="openingTime">
            {timeOfDayOptions}
            </select>
            <br></br>
            <button type="submit">Save</button>
          </form>
        </div>
    )
}

export default AttractionForm;
