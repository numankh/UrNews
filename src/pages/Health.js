import React, {Component} from 'react'
import PageTemplate from '../components/PageTemplate'

class Health extends Component {
  render() {
    return (
      <div>
        <PageTemplate 
            endpoint = {process.env.REACT_APP_HEALTH_ENDPOINT}
            pageTitle = "Health Sector News"
        />
      </div>
    );
  }
}

export default Health;
