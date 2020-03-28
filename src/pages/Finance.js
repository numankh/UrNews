import React, {Component} from 'react';
import FeedItem from '../components/FeedItem';
import Grid from '@material-ui/core/Grid';


class Finance extends Component {

  state = {
    todos: []
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_FINANCE_ENDPOINT)
    .then(res => res.json())  //parses output to JSON
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
        <h1>Finance News</h1>
          <Grid container spacing={3}>
            {this.state.todos.map((todo) => (
              <Grid item xs={4}>
                <FeedItem 
                  title={todo.title} 
                  description={todo.description} 
                  url={todo.url}
                  image={todo.urlToImage}
                />
              </Grid>
            ))}
          </Grid>
        </div>
       </div>
    );
  }
}

export default Finance;
