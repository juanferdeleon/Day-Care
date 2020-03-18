import * as types from '../types/events';

export const addEvent = (eventId, eventInfo, babyId) => ({
    type: types.EVENT_ADDED,
    payload: {eventId, eventInfo, babyId},
})

export const removeEvent = eventId => ({
    type: types.EVENT_DELETED,
    payload: eventId,
})