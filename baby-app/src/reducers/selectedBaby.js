import * as types from '../types/selectedBaby'

const selectedBaby = (state = null, action) => {

    switch(action.type){
        case types.SELECTED_BABY:
            return action.payload;
        default:
            return state;
    }

}

export default selectedBaby;

export const getSelectedBaby = state => state;