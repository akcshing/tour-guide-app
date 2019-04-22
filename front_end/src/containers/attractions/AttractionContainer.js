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
    console.log("id: ", this.props);
    const url = '/attractions/' + this.props.id;
    request.get(url).then((data) => {
      this.setState({attraction: data})
      console.log(this.state.attraction);
    })
  }

  render(){
    console.log("rendering...", this.state.attraction);
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
