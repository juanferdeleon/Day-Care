import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import babies, * as babiesSelectors from "./babies";
import events, * as eventsSelectors from "./events";
import selectedBaby, * as selectedBabySelectors from "./selectedBaby";
import path, * as pathSelectors from "./path";

const reducer = combineReducers({
  babies,
  events,
  selectedBaby,
  path,
  form: formReducer,
});

export default reducer;

export const getBaby = (state, babyId) =>
  babiesSelectors.getBaby(state.babies, babyId);

export const getBabies = (state) => babiesSelectors.getBabies(state.babies);

export const getBabiesOrder = (state) =>
  babiesSelectors.getBabiesOrder(state.babies);

export const getEvent = (state, eventId) =>
  eventsSelectors.getEvent(state.events, eventId);

export const getEvents = (state) => eventsSelectors.getEvents(state.events);

export const getBabyEvents = (state, babyId) =>
  eventsSelectors.getBabyEvents(state.events, babyId);

export const getSelectedBaby = (state) =>
  selectedBabySelectors.getSelectedBaby(state.selectedBaby);

export const getPathDepth = (state) => pathSelectors.getPathDepth(state.path);
