import React from 'react';
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      phone: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are willing to receive notifications about: " + this.state.topic);
    this.setState({topic: ''});
    this.setState({phone: null});
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        {/* <h1>Hello {this.state.topic} {this.state.phone}</h1> */}
        <h2>Get notifications on your phone about news that matters to you!</h2>
        <p>Enter your news related topic:</p>
        <input
          type='text'
          name='topic'
          required
          onChange={this.myChangeHandler}
        />
        <p>Enter your phone number:</p>
        <input 
          type="tel" 
          id="phone" 
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          onChange={this.myChangeHandler}
          />
        <small> Format: 123-456-7890</small>
        <br/><br/>
        <input
          type='submit'
        />
        <input 
          type="reset" 
          value="Reset"
        />
      </form>
      
    );
  }
}


export default MyForm