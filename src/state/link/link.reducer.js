import linkActionTypes from "./link.types";
import { incView, decView } from "./link.utils";

export const INITIAL_STATE = {
  view: 0,
  PROJECT: [
    'project1', 'project2', 'project3', 'project4'
  ]
}


export const linkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case linkActionTypes.NEXT:
      return {
        ...state,
        view: incView(state.view)
      }
    case linkActionTypes.PREVIOUS:
      return {
        ...state,
        view: decView(state.view)
      }
    case linkActionTypes.SET_VIEW:
      return {
        ...state,
        view: action.payload
      }
    default:
      return state;
  }
}