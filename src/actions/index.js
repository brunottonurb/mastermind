import {
  SELECT_COLOR,
  DELETE_COLOR,
  CLEAR_SELECTION,
  SUBMIT_GUESS,
  NEW_GAME,
} from '../constants';

export const selectColor = (color, slot) => ({
  type: SELECT_COLOR,
  color,
  slot,
});

export const deleteColor = slot => ({
  type: DELETE_COLOR,
  slot,
});

export const clearSelection = () => ({
  type: CLEAR_SELECTION,
});

export const submitGuess = () => ({
  type: SUBMIT_GUESS,
});

export const newGame = () => ({
  type: NEW_GAME,
});
