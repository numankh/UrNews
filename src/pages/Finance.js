import React, {Component} from 'react'
import FeedItem from '../components/FeedItem'

class Finance extends Component {

  state = {
    todos: []
  };

  componentDidMount() {
    fetch('https://xgw3em0w46.execute-api.us-east-1.amazonaws.com/dev/finance')
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
        <h1>My Todos</h1>
        {this.state.todos.map((todo) => (
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{todo.title}</h4>
              <h5 className="card-title">{todo.author}</h5>
              <h6 className="card-title">{todo.publishedAt}</h6>
              <h7 className="card-title">{todo.description}</h7>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}

export default Finance;
