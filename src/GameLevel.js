import React, {Component} from 'react';

export class GameState extends Component {
    
    render(){
        return (

            <li  onClick = { () => this.props.updateBoard()}>
                Game Level {this.props.level}
            </li>
        );
    }
}