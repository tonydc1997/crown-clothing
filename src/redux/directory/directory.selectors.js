import { createSelector } from 'react-redux';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
