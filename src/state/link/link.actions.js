import linkActionTypes from "./link.types";

export const nextLink = () => ({
  type: linkActionTypes.NEXT
})

export const previousLink = () => ({
  type: linkActionTypes.PREVIOUS
})