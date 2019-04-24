import React from "react";

const Radio = (props) => {
  return(
    <div>
    <input type = "radio" id = {props.value} name = {props.enum} value = {props.value}/>
    <label for={props.value}>{props.value}</label>
    </div>
  )
}

export default Radio;

// timeOfDayArr.map((time, index) => {
//   <Radio  value=time enum = {props.enum} />
// })
