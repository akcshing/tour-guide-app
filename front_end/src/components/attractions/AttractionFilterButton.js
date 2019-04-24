import React  from 'react';


const AttractionFilterButton = (props) => {

  const filterCriteria = props.filterOption;

  const handleFilter = () => {
    props.handleFilter(filterCriteria)
  }

  return (
    <React.Fragment>
    <button onClick = {handleFilter}>{filterCriteria}</button>
    </React.Fragment>
  )
}

export default AttractionFilterButton;
