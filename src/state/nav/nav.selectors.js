import { createSelector } from 'reselect';

const selectNav = state => state.nav;

export const selectDrawLine = createSelector(
  [selectNav],
  nav => nav.drawLine
);

export const selectLocation = createSelector(
  [selectNav],
  nav => nav.location
);

export const selectFlash = createSelector(
  [selectNav],
  nav => nav.flash
);