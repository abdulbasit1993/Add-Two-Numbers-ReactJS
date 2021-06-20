import React, { Component } from 'react';
import '../App.css';

class Sum extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number1: 0,
            number2: 0,
            result: 0
        }
    }

    doAction = () => {
        this.setState({result: parseInt(this.state.number1) + parseInt(this.state.number2)});
    }

  render() {
    return (
      <div className="sum-div">
        <br/><br/>
        <h1 style={{color: '#000000' }}>Add Two Numbers</h1>
        <input type='number' className="inputBox" placeholder="Enter first number" onChange={(event) => this.setState({number1: event.target.value})} />
        <br /><br /> 
        <input type='number' className="inputBox" placeholder="Enter second number" onChange={(event) => this.setState({number2: event.target.value})} />
        <br/><br />
        <input type="button" className="addBtn" onClick={this.doAction} value="Add" />
        <br /><br />
        <label style={{ fontSize: 25, fontWeight: 500 }}>Result: </label><br/>
        <input type='text' className="inputBox" value={this.state.result} readOnly />
      </div>
    );
  }
}

export default Sum;