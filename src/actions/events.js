import * as types from '../types/events';

export const addEvent = (eventId, eventInfo) => ({
    type: types.EVENT_ADDED,
    payload: {eventId, eventInfo},
})

export const removeEvent = eventId => ({
    type: types.EVENT_DELETED,
    payload: eventId,
})