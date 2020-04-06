import * as types from "../types/path";
import { combineReducers } from "redux";

const pathDepth = (state = { prev: 0, actual: 0 }, action) => {
  switch (action.type) {
    case types.PATH_DEPTH_SETTED:
      return {
        prev: state.actual,
        actual: action.payload,
      };
    default:
      return state;
  }
};

const path = combineReducers({
  pathDepth,
});

export default path;

export const getPathDepth = (state) => state.pathDepth;
