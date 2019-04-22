import React from 'react';

const AttractionForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();
    const attraction = {
        "name": event.target.name.value,
        "location": event.target.location.value,
        "category": event.target.category.value,
        "description": event.target.description.value,
        "fee": event.target.fee.value,
        "accessibility": event.target.accessibility.value,
        "opening_time": event.target.opening_time.value

      }

      props.handleAttractionPost(attraction)

  }
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name"/>
            <input type="text" placeholder="Location" name="location"/>
            <input type="text" placeholder="Category" name="category"/>
            <input type="text" placeholder="Description" name="description"/>
            <input type="number" placeholder="Fee" name="fee"/>
            <input type="text" placeholder="Accessibility" name="accessibility"/>
            <input type="text" placeholder="Opening_Time" name="opening_time"/>
            <button type="submit">Save</button>
          </form>
        </div>
    )
}

export default AttractionForm;
