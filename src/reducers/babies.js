import { combineReducers } from 'redux';
import * as types from '../types/babies';

const byId = (state = {}, action) => {

    switch(action.type){
        case types.BABY_ADDED:
            return {
                ...state,
                [action.payload.babyId]: {...action.payload.babyInfo}
            }
        default:
            return state;
    }

}

const order = (state = [], action) => {

    switch(action.type){
        case types.BABY_ADDED:
            return [...state, action.payload.babyId]
        default:
            return state
    }

}

const babies = combineReducers({
    byId,
    order,
})

export default babies;

export const getBaby = (state, babyId) => state.byId[babyId];

export const getBabies = (state) => state.order.map(
    babyId => getBaby(state, babyId),
).filter(baby => baby != null);