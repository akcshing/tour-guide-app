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

    })
  }

  render(){

    return(
      <div>
        <div className="attraction-header">
          <h1>Attraction List</h1>
          <Link to="/attractions/new">Create Attraction</Link>
        </div>
        <div className="attraction-list">
              <AttractionList attractions = {this.state.attractions}/>
        </div>
      </div>
    )
  }
}

export default AttractionListContainer;
