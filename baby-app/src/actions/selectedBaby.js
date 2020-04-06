import * as types from '../types/selectedBaby';

export const selectBaby = babyId => ({
    type: types.SELECTED_BABY,
    payload: babyId,
})