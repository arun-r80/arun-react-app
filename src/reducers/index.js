// create reducer or reducers for the store
import {CLICK_CELL} from '../utilities.js';

const initialState = {
    board: new Array(9).fill(null)
}


export default function rootReducer(state=initialState, action ){
    switch (action.type){
        case CLICK_CELL:
            let newBoard = state.board.slice();
            newBoard[action.payload.cell] = action.payload.player;
            return Object.assign({},{board:newBoard});
        default:
            return initialState;

    }
    
}

