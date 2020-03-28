import React, {Component} from 'react'
import FeedItem from '../components/FeedItem'

class Health extends Component {

  state = {
    todos: []
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_HEALTH_ENDPOINT)
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
        <h1>Health News</h1>
        {this.state.todos.map((todo) => (
          <FeedItem 
            title={todo.title} 
            description={todo.description} 
            url={todo.url}
            image={todo.urlToImage}
          />
        ))}
        </div>
       </div>
    );
  }
}

export default Health;
