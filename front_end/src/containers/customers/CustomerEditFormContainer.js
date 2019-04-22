import React, {Component} from "react";


class CustomerEditFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    }
  }

  render(){
    return(
      <h1>Customer EditForm</h1>
    )
  }

}

export default CustomerEditFormContainer;
