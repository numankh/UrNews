import React from 'react';
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      phone: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
        <h2>Get notifications on your phone about news that matters to you!</h2>
        <p>Enter your news related topic:</p>
        <input
          type='text'
          name='topic'
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
      </form>
      
    );
  }
}


export default MyForm