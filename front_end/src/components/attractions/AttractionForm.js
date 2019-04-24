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
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name"/>
            <input type="text" placeholder="Location" name="location"/>
            <input type="text" placeholder="Category" name="category"/>
            <input type="text" placeholder="Description" name="description"/>
            <input type="number" placeholder="Fee" name="fee"/>
            <input type="text" placeholder="Pic url" name="pic"/>
            <select name="accessibility">
            {accessibilityOptions}
            </select>
            <select name="openingTime">
            {timeOfDayOptions}
            </select>



            <button type="submit">Save</button>
          </form>
        </div>
    )
}

export default AttractionForm;
