import React, {Component} from 'react';
import FeedItem from '../components/FeedItem';
import Grid from '@material-ui/core/Grid';


class Finance extends Component {

  state = {
    articles: []
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_FINANCE_ENDPOINT)
    .then(res => res.json())  //parses output to JSON
    .then((data) => {
      this.setState({ articles: data })
      console.log(this.state.articles)
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        <h1>Finance News</h1>
          <Grid container spacing={3}>
            {this.state.articles.map((article) => (
              <Grid item xs={4}>
                <FeedItem 
                  title={article.title} 
                  description={article.description} 
                  url={article.url}
                  image={article.urlToImage}
                />
              </Grid>
            ))}
          </Grid>
       </div>
    );
  }
}

export default Finance;
