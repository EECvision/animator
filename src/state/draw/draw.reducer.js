import drawActionTypes from './draw.types';

export const INITIAL_STATE = {
  drawLine: {
    label: 'home',
    mId: 'd'
  }
}

export const drawReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case drawActionTypes.SET_DRAW:
      return {
        ...state,
        drawLine: action.payload
      }
    default:
      return state
  }
}