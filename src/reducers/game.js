import {
  SELECT_COLOR,
  DELETE_COLOR,
  CLEAR_SELECTION,
  SUBMIT_GUESS,
  COLORS,
  NEW_GAME,
} from '../constants';

const startState = {
  // combi: [0, 1, 2, 3].map(() => COLORS[Math.floor(Math.random() * COLORS.length)]),
  // remainingTries: 10,
  // selection: [null, null, null, null],
  // prevRounds: [
  // ],
  // won: false,
  // lost: false,
  showInstructions: true,
};

const newGame = {
  combi: [0, 1, 2, 3].map(() => COLORS[Math.floor(Math.random() * COLORS.length)]),
  remainingTries: 10,
  selection: [null, null, null, null],
  prevRounds: [
  ],
  won: false,
  lost: false,
  showInstructions: false,
};

const game = (state = startState, action) => {
  switch (action.type) {
    case NEW_GAME: {
      return newGame;
    }
    case SELECT_COLOR: {
      // didn't use dragndrop to select
      if (action.slot === undefined) {
        const newSelection = [];
        let added = false;
        for (let i = 0; i < state.selection.length; i++) {
          if (!added && !state.selection[i]) {
            newSelection.push(action.color);
            added = true;
          } else newSelection.push(state.selection[i]);
        }
        return {
          ...state,
          selection: newSelection,
        };
      }
      // did use draganddrop to select
      return {
        ...state,
        /* eslint-disable-next-line no-confusing-arrow */
        selection: state.selection.map((prevColor, index) => index === action.slot ? action.color : prevColor)
      };
    }
    case DELETE_COLOR: {
      return {
        ...state,
        /* eslint-disable-next-line no-confusing-arrow */
        selection: state.selection.map((prevColor, index) => index === action.slot ? null : prevColor)
      };
    }
    case CLEAR_SELECTION: {
      return {
        ...state,
        selection: [null, null, null, null],
      };
    }
    case SUBMIT_GUESS: {
      // check correct colors and get clues
      let rightColorWrongSpot = 0;
      let rightColorRightSpot = 0;
      state.selection.forEach((color, index) => (state.combi[index] === color) && rightColorRightSpot++);
      COLORS.forEach((color) => {
        if (state.combi.includes(color) && state.selection.includes(color)) {
          rightColorWrongSpot +=
            Math.min(state.combi.filter(c => c === color).length, state.selection.filter(c => c === color).length);
        }
      });
      rightColorWrongSpot -= rightColorRightSpot;
      // guess is correct
      if (rightColorRightSpot === 4) {
        return {
          ...state,
          remainingTries: state.remainingTries - 1,
          selection: [null, null, null, null],
          prevRounds: [
            {
              guess: state.selection,
              clues: {
                rightColorRightSpot,
                rightColorWrongSpot,
              }
            },
            ...state.prevRounds,
          ],
          won: true,
        };
      }
      // guess is not correct and remaining tries is 0 -> lost
      if (rightColorRightSpot !== 4 && (state.remainingTries - 1) <= 0) {
        return {
          ...state,
          remainingTries: state.remainingTries - 1,
          selection: [null, null, null, null],
          prevRounds: [
            {
              guess: state.selection,
              clues: {
                rightColorRightSpot,
                rightColorWrongSpot,
              }
            },
            ...state.prevRounds,
          ],
          lost: true,
        };
      }
      return {
        ...state,
        remainingTries: state.remainingTries - 1,
        selection: [null, null, null, null],
        prevRounds: [
          {
            guess: state.selection,
            clues: {
              rightColorRightSpot,
              rightColorWrongSpot,
            }
          },
          ...state.prevRounds,
        ]
      };
    }
    default: {
      return state;
    }
  }
};

export default game;
