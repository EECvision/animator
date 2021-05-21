import linkActionTypes from "./link.types";

export const nextLink = () => ({
  type: linkActionTypes.NEXT
})

export const previousLink = () => ({
  type: linkActionTypes.PREVIOUS
})

export const setView = viewId => ({
  type: linkActionTypes.SET_VIEW,
  payload: viewId
})