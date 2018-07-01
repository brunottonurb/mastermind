import React from 'react';
import PropTypes from 'prop-types';
import SelectionField from './SelectionField';

const Overlay = (props) => {
  const {
    won,
    lost,
    combi,
    remainingTries,
    startNew,
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

  if (!won && !lost) return null;

  return (
    <div className="overlay">
      {won && wonMessage(remainingTries)}
      {lost && lostMessage(combi)}
      <button onClick={startNew}>New Game</button>
    </div>
  );
};

Overlay.propTypes = {
  won: PropTypes.bool.isRequired,
  lost: PropTypes.bool.isRequired,
  combi: PropTypes.array.isRequired,
  remainingTries: PropTypes.number.isRequired,
  startNew: PropTypes.func.isRequired,
};

export default Overlay;
