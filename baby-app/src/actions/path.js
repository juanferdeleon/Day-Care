import * as types from "../types/path";

export const setPath = (pathDepth) => ({
  type: types.PATH_DEPTH_SETTED,
  payload: pathDepth,
});
