import React, {Component} from 'react';
import PageTemplate from '../components/PageTemplate'

class Finance extends Component {
  render() {
    return (
      <div>
        <PageTemplate 
            endpoint = {process.env.REACT_APP_FINANCE_ENDPOINT}
            pageTitle = "Finance Sector News"
        />
      </div>
    );
  }
}

export default Finance;
