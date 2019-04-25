import React  from 'react';


const AttractionFilterButton = (props) => {

  const filterCriteria = props.filterOption;

  const handleFilter = () => {
    if (props.filterOption.value) {
      props.handleFilter(filterCriteria.value)
    } else {
    props.handleFilter(filterCriteria)
  }
  }

  if (props.filterOption.value) {
    return (
    <React.Fragment>
      <button className = "attr-button" onClick = {handleFilter}>{filterCriteria.displayName}</button>
    </React.Fragment>)
  } else {

  return (
    <React.Fragment>
      <button className = "attr-button" onClick = {handleFilter}>{filterCriteria}</button>
    </React.Fragment>
  )
}
}

export default AttractionFilterButton;
