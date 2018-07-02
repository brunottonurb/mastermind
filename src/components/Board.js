import React from 'react';
import PropTypes from 'prop-types';
import PrevGuessField from './PrevGuessField';
import ClueField from './ClueField';

const renderClues = (amount, color, className) => {
  const clues = [];
  for (let i = 0; i < amount; i++) {
    clues.push(<ClueField key={`clueField_${className}_${i}`} color={color} className={className} />);
  }
  return clues;
};

const Board = (props) => {
  const { prevMoves } = props;
  return (
    <div className="board">
      {prevMoves.map((move, index) => (
        <div className="prevMove" key={`prevMove_${index}`}>
          <div className="prevGuess" key={`prevGuess_${index}`}>
            {move.guess.map((color, otherIndex) => (
              <PrevGuessField color={color} key={`prevGuessField_${index}_${otherIndex}`} />
            ))}
          </div>
          <div className="clues" key={`clues_${index}`}>
            {renderClues(move.clues.rightColorRightSpot, 'white', 'cluesLeft')}
            {renderClues(move.clues.rightColorWrongSpot, 'black', 'cluesRight')}
          </div>
        </div>
    ))}
    </div>
  );
};

Board.propTypes = {
  prevMoves: PropTypes.array.isRequired,
};

export default Board;
