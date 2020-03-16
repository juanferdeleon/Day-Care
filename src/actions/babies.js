import * as types from '../types/babies';

export const addBaby = (babyId, babyInfo) => ({
    type: types.BABY_ADDED,
    payload: {babyId, babyInfo},
})