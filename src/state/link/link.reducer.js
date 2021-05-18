import linkActionTypes from "./link.types";
import { incView, decView } from "./link.utils";

export const INITIAL_STATE = {
  PROJECT: [
    'project1', 'project2', 'project3', 'project4'
  ]
}


export const linkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case linkActionTypes.NEXT:
      incView();
      return state
    case linkActionTypes.PREVIOUS:
      decView()
      return state
    default:
      return state;
  }
}