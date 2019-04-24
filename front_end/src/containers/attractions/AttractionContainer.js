import React, {Component} from "react";
import Attraction from "../../components/attractions/Attraction"
import AttractionDetails from "../../components/attractions/AttractionDetails";
import Request from "../../helpers/request"
import BookingList from "../../components/bookings/BookingList"


class AttractionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attraction: null,
      bookings: null
    }
  }

  componentDidMount(){
    let request = new Request()

    const url = '/attractions/' + this.props.id;
    request.get(url).then((data) => {
      this.setState({attraction: data})
    })
    .then(()=>{
      request.get("/attractions/" + this.props.id + "/bookings")
      .then((data) => {
        this.setState({bookings: data._embedded.bookings})
      })
    })

  }

  handleDelete(id){
    const request = new Request();
    const url = '/attractions/' + id;
    request.delete(url).then(() => {
      window.location = '/attractions'
    })
  }

  handleEdit(id){
    window.location = "/attractions/edit/" + id
  }

  render(){
    return(
      <div className = "attraction">
      <h1>Attraction</h1>
      <Attraction attraction = {this.state.attraction} />
      <AttractionDetails
      attraction = {this.state.attraction}
      handleDelete = {this.handleDelete}
      handleEdit={this.handleEdit}
      />
      <BookingList bookings={this.state.bookings} />
      </div>
    )
  }

}

export default AttractionContainer;
