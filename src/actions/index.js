import {CLICK_CELL} from '../utilities.js';

export function clickAction(payload){
    return {
        type:CLICK_CELL,
        payload:payload
    };
}