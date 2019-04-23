import React, {Component} from "react";
import Attraction from "../../components/attractions/Attraction"
import AttractionDetails from "../../components/attractions/AttractionDetails";
import Request from "../../helpers/request"

class AttractionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attraction: null
    }
  }

  componentDidMount(){
    let request = new Request()

    const url = '/attractions/' + this.props.id;
    request.get(url).then((data) => {
      this.setState({attraction: data})

    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/attractions/' + id;
    request.delete(url).then(() => {
      window.location = '/attractions'
    })
  }

  render(){

    return(
      <div className = "attraction">
      <h1>Attraction</h1>
      <Attraction attraction = {this.state.attraction} />
      <AttractionDetails attraction = {this.state.attraction} handleDelete = {this.handleDelete} handleEdit={this.handleEdit}/>
      </div>
    )
  }

}

export default AttractionContainer;
