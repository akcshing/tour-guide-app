import React, {Component} from "react";
import AttractionForm from "../../components/attractions/AttractionForm"
import Request from "../../helpers/request"

class AttractionFormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleAttractionPost= this.handleAttractionPost.bind(this)
  }

  componentDidMount() {

  }

  handleAttractionPost(attraction){
    const request = new Request();
    request.post('/attractions', attraction).then(() => {
      window.location = '/attractions'
    })
  }


  render(){
    return(
      <AttractionForm
      handleAttractionPost={this.handleAttractionPost}
      />
    )
  }

}

export default AttractionFormContainer;
