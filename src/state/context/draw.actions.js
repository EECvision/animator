import drawActionTypes from './draw.types';

export const setDraw = drawItem =>({
  type: drawActionTypes.SET_DRAW,
  payload: drawItem
})