import React from "react";

const Radio = (props) => {
  return(
    <div>
    <input type = "radio" id = {props.value.value} name = {props.enum} value = {props.value.value}/>
    <label for={props.value.value}>{props.value.displayName}</label>
    </div>
  )
}

export default Radio;

// timeOfDayArr.map((time, index) => {
//   <Radio  value=time enum = {props.enum} />
// })
