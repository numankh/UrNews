import React, {Component} from 'react'
import PageTemplate from '../components/PageTemplate'

class Housing extends Component {
  render() {
    return (
      <div>
        <PageTemplate 
            endpoint = {process.env.REACT_APP_HOUSING_ENDPOINT}
            pageTitle = "Housing Sector News"
        />
      </div>
    );
  }
}

export default Housing;
