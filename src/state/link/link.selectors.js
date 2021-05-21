import { createSelector } from 'reselect';

const selectLink = state => state.link;

export const selectProject = createSelector(
  [selectLink],
  link => link.PROJECT
);

export const selectView = createSelector(
  [selectLink],
  link => link.view
);

