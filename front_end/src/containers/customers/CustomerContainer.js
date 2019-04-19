import React, {Component} from "react";


class CustomerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    }
  }

  render(){
    return(
      <h1>Customer </h1>
    )
  }

}

export default CustomerContainer;
