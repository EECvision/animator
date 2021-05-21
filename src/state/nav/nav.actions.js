import drawActionTypes from './nav.types';

export const setDraw = drawItem =>({
  type: drawActionTypes.SET_DRAW,
  payload: drawItem
})

export const setLocation = loc => ({
  type: drawActionTypes.SET_LOCATION,
  payload: loc
})

export const setFlash = state => ({
  type: drawActionTypes.SET_FLASH,
  payload: state
})

