import * as types from '../types/selectedBaby'

const selectedBaby = (state = 1, action) => {

    switch(action.type){
        case types.SELECTED_BABY:
            return action.payload;
        default:
            return state;
    }

}

export default selectedBaby;

export const getSelectedBaby = state => state;