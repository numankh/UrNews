import React, {Component} from 'react'
import PageTemplate from '../components/PageTemplate'

class Energy extends Component {
  render() {
    return (
      <div>
        <PageTemplate 
            endpoint = {process.env.REACT_APP_ENERGY_ENDPOINT}
            pageTitle = "Energy Sector News"
        />
      </div>
    );
  }
}

export default Energy;
