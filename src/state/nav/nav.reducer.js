import drawActionTypes from './nav.types';

export const INITIAL_STATE = {
  drawLine: '',
  location: '',
  flash: false
}

export const navReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case drawActionTypes.SET_DRAW:
      return {
        ...state,
        drawLine: action.payload
      }
    case drawActionTypes.SET_LOCATION:
      return {
        ...state,
        location: action.payload
      }
    case drawActionTypes.SET_FLASH:
      return {
        ...state,
        flash: action.payload
      }
    default:
      return state
  }
}