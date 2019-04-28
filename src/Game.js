import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Board from './Board.js';
import {GameState} from './GameLevel';

class Game extends Component {
  constructor(props){
    super(props);
    this.state = { history:[{ 
                    isXPlayer:true,
                    board: Array(9).fill(null)}],
                   level : 0,
                   status : 'Begin Game!!',
                   isGameDone: false
                 
    };
  } 
  
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }  

  updateLevel(index){
    
    let levelPlayer = (this.state.history[index].isXPlayer);
    let redactedHistory = index ? this.state.history.slice(0,index) :this.state.history.slice(0,1);
    let redactedLevel = index ? index - 1 : 0;
    let redactedWinner = this.calculateWinner(redactedHistory.slice(-1));
    let redactedStatus,
     redactedState; 
    
    if(redactedWinner){
      redactedStatus = 'Winner: ' + redactedWinner;
      redactedState = true;
    } else {
      redactedStatus = 'Next player: ' + ((levelPlayer) ? 'O' : 'X'); redactedState= false;
    
    }


    this.setState({
      history: redactedHistory,
      level: redactedLevel,
      status:redactedStatus,
      isGameDone:redactedState
    });
  }

   updateGame(cell){
    const gameLevel = this.state.level;
    const newValue = this.state.history[gameLevel].board.slice();
    const currentPlayer = this.state.history[gameLevel].isXPlayer ;
    const updatedHistory = this.state.history;
    let status, state;

    if(this.state.isGameDone) {return;}
    if(newValue[cell]) {return;}

    newValue[cell] = (currentPlayer ) ? 'X' :'O';
    const winner = this.calculateWinner(newValue);

    if(winner){
      status = 'Winner: ' + winner;state=true;
   } else {
      status = 'Next player: ' + ((currentPlayer) ? 'O' : 'X');state= false;
   }

    this.setState({
                   history:this.state.history.concat({
                    isXPlayer : !currentPlayer,
                    board : newValue
    
        }),
                   level:gameLevel + 1,
                   status : status,
                   isGameDone: state
                  });
    }

  

  render() {
    const gamelevel = this.state.history.map( (el,index) => { return <GameState key={index} level={index} updateBoard= {()=>this.updateLevel(index)} /> ;}  );
    console.log('Level during render ' + this.state.level);
    return (
    
      <div className="game">
        <div className="game-board">
          <div className='game-status'>{this.state.status}</div>
          <Board board={this.state.history[this.state.level].board} updateGame={(cell)=> this.updateGame(cell)}/>
        </div>
        <div className="game-info">
          
    <ol>{gamelevel}</ol>
        </div>
      </div>
    );
  }

  
}

export default Game;
