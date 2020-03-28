import React, {Component} from 'react'
import PageTemplate from '../components/PageTemplate'

class Comm extends Component {
  render() {
    return (
      <div>
        <PageTemplate 
            endpoint = {process.env.REACT_APP_COMM_ENDPOINT}
            pageTitle = "Communications Sector News"
        />
      </div>
    );
  }
}

export default Comm;
