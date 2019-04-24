import React, {Component} from "react";
import {Link} from 'react-router-dom';
import AttractionList from "../../components/attractions/AttractionList"
import Request from "../../helpers/request"
import AttractionFilterButton from "../../components/attractions/AttractionFilterButton"
import {categoryArr} from "../../helpers/enums"

class AttractionListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attractions: null,
      filteredAttractions: null
    }
    this.handleFilter = this.handleFilter.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    request.get('/attractions').then((data) => {
      this.setState({attractions: data._embedded.attractions})
    })
  }

  handleFilter(filterCriteria){
    let request = new Request()
    request.get('/attractions/sort_by_category/' + filterCriteria).then((data) => {
      this.setState({attractions: data})
    })
  }

  render(){
    const filterOptions = categoryArr.map((option, index) => {
      return <AttractionFilterButton key = {index} filterOption = {option} handleFilter={this.handleFilter} />
    })

    return(
      <div>
        <div className="attraction-header">
          <h1>Attraction List</h1>
          <Link to="/attractions/new">Create Attraction</Link>
        </div>
        <div className="attraction-filters">
          {filterOptions}
        </div>
        <div className="attraction-list">
              <AttractionList attractions = {this.state.attractions}/>
        </div>
      </div>
    )
  }
}

export default AttractionListContainer;
