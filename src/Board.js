import React, { Component } from 'react';
import './App.css';
import Square from './Square.js';
import {connect} from 'react-redux';

const mapStateToProps = (state,ownProps) => {
    const {updateGame} = ownProps;
    const board = state.board;
    return { board, updateGame
    
    };
};

class Board extends React.Component {
   
    
   renderSquare(i) {
      return <Square value={this.props.board[i]}  handleClick={()=>this.props.updateGame(i) }/>;
    }
  
    render() {
     console.log(' Board  from board' + this.props.board);
  
      return (
        <div>
          
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)} 
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

 // const Board = connect(mapStateToProps)(ConnectedBoard);
  export default Board;
  
  