import React, {Component} from 'react'
import PageTemplate from '../components/PageTemplate'

class Tech extends Component {
  render() {
    return (
      <div>
        <PageTemplate 
            endpoint = {process.env.REACT_APP_TECH_ENDPOINT}
            pageTitle = "Technology Sector News"
        />
      </div>
    );
  }
}

export default Tech;
