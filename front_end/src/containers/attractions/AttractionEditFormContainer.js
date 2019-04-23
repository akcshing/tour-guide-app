import React, {Component} from "react";
import AttractionEditForm from "../../components/attractions/AttractionEditForm"
import Request from "../../helpers/request"

class AttractionEditFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attraction: null
    }
    this.handleAttractionUpdate = this.handleAttractionUpdate.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/attractions/" + this.props.id ).then((attraction) => {

      this.setState({attraction: attraction})
    });

  }

  handleAttractionUpdate(attraction){
    const request = new Request();
    request.patch('/attractions/' + this.props.id, attraction).then(() => {
      window.location = '/attractions/' + this.props.id
    })
  }

  render(){

    if (!this.state.attraction) return null;

    return(
      <div className = "attraction-edit-form">
      <h1>Edit Attraction Info</h1>
      <AttractionEditForm
      attraction={this.state.attraction}
      handleAttractionUpdate = {this.handleAttractionUpdate}/>
      </div>
    )
  }

}

export default AttractionEditFormContainer;
