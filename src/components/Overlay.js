import React from 'react';
import PropTypes from 'prop-types';
import SelectionField from './SelectionField';
import ClueField from './ClueField';

const Overlay = (props) => {
  const {
    won,
    lost,
    combi,
    remainingTries,
    startNew,
    showInstructions,
  } = props;

  const wonMessage = n => (
    <div>
      <h1>You won! congratulations!</h1>
      <h2>You had {n} guesses remaining.</h2>
    </div>
  );

  const lostMessage = colors => (
    <div>
      <h1>You lost!</h1>
      <h2>The correct combination was:</h2>
      <div className="correct-combi">
        {colors.map((color, index) => (
          <SelectionField color={color} key={`correct-combi_${index}`} />
        ))}
      </div>
    </div>
  );

  const instructions = () => (
    <div className="instructions">
      <h1>Mastermind</h1>
      <h2>Instructions</h2>
      <div className="instructions-text">
        Try to <strong>guess the 4-color combination</strong>. You have <strong>10 tries</strong>.<br />
        For every false guess, you get hints.<br />
        For every color at the <strong>correct slot</strong>, you are shown a {<ClueField color="white" />}.
        For every correct color that sits at the <strong>wrong slot</strong>, you get a {<ClueField color="black" />}.<br />
        You can select colors by clicking them, or dragging them to the appropriate slot (does not work with touch).
        Deselect a color by clicking it in the selection slot.
      </div>
    </div>
  );

  if (!(showInstructions || lost || won)) return null;

  return (
    <div className="overlay">
      {showInstructions && instructions()}
      {won && wonMessage(remainingTries)}
      {lost && lostMessage(combi)}
      <button onClick={startNew}>New Game</button>
    </div>
  );
};

Overlay.propTypes = {
  won: PropTypes.bool.isRequired,
  lost: PropTypes.bool.isRequired,
  combi: PropTypes.array,
  remainingTries: PropTypes.number,
  startNew: PropTypes.func.isRequired,
  showInstructions: PropTypes.bool.isRequired,
};

Overlay.defaultProps = {
  combi: null,
  remainingTries: null,
};

export default Overlay;
