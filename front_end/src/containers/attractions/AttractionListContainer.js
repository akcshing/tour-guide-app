import React, {Component} from "react";
import {Link} from 'react-router-dom';
import AttractionList from "../../components/attractions/AttractionList"
import Request from "../../helpers/request"

class AttractionListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attractions: null
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/attractions').then((data) => {
      this.setState({attractions: data._embedded.attractions})
      console.log("hi", data);
    })
  }

  render(){
    console.log("rendering...");
    return(
      <div className="attraction-list">
      <h1>Attraction List</h1>
      <Link to="/attractions/new">Create Attraction</Link>
      <AttractionList attractions = {this.state.attractions}/>
      </div>
    )
  }
}

export default AttractionListContainer;
