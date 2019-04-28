import React, { Component } from 'react';
import './App.css';

class Square extends React.Component {
   
  render() {
    return (
        <button className="square"   onClick={ () => this.props.handleClick() }>
          {this.props.value}
        </button>
      );
    }
  }

  export default Square;