import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import babies, * as babiesSelectors from './babies';
import events, * as eventsSelectors from './events';
import selectedBaby, * as selectedBabySelectors from './selectedBaby';

const reducer = combineReducers({
    babies,
    events,
    selectedBaby,
    form: formReducer,
})

export default reducer;

export const getBaby = (state, babyId) => babiesSelectors.getBaby(state.babies, babyId)

export const getBabies = (state) => babiesSelectors.getBabies(state.babies)

export const getEvent = (state, eventId) => eventsSelectors.getEvent(state.events, eventId)

export const getEvents = (state) => eventsSelectors.getEvents(state.events)

export const getSelectedBaby = (state) => selectedBabySelectors.getSelectedBaby(state.selectedBaby)

