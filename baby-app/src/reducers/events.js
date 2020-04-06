import { omit } from 'lodash/omit'
import { combineReducers } from 'redux'
import * as types from '../types/events';

const byId = (state = {}, action) => {

    switch(action.type){
        case types.EVENT_ADDED:
            return{
                ...state,
                [action.payload.eventId]: action.payload.eventInfo,
            }
        case types.EVENT_DELETED:
            // console.log(omit(state, action.payload))
            return state
        default:
            return state
    }

}

const order = (state = [], action) => {

    switch(action.type){
        case types.EVENT_ADDED:
            return [...state, action.payload.eventId]
        default:
            return state
    }

}

const babiesEvents = (state = {1: []}, action) => {

    switch(action.type){
        case types.BABY_ADDED:
            return{
                ...state,
                [action.payload.babyId]: [],
            }
        case types.EVENT_ADDED:
            console.log(action.payload.babyId)
            return{
                ...state,
                [action.payload.babyId]: [...state[action.payload.babyId], action.payload.eventId]
            }
        case types.EVENT_DELETED:
            return{
                ...state,
                [action.payload.babyId]: [...state[action.payload.babyId]].filter(eventId => eventId !== action.payload.eventId)
            }
        default:
            return state
    }

}

const events = combineReducers ({
    byId,
    babiesEvents,
    order
})

export default events;

export const getEvent = (state, eventId) => state.byId[eventId];

export const getEvents = state => state.order.map(
    eventId => ({[eventId]: getEvent(state, eventId)}),
).filter(event => event != null);

export const getBabyEvents = (state, babyId) => state.babiesEvents[babyId];