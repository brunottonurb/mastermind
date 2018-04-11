import React from 'react';
import PropTypes from 'prop-types';
import PrevGuessField from './PrevGuessField';
import ClueField from './ClueField';

const renderClues = (amount, color, className) => {
  const clues = [];
  for (let i = 0; i < amount; i++) {
    clues.push(<ClueField color={color} className={className} />);
  }
  return clues;
};

const Board = (props) => {
  const { prevMoves } = props;
  const rightGuess = prevMoves.length >= 1 && prevMoves[0].clues.rightColorRightSpot === 4;
  const gameOver = prevMoves.length >= 10 || rightGuess;
  return (
    <div className="board">
      {gameOver && 'GAME OVER!'}
      {gameOver && (rightGuess ? 'YOU WIN!' : 'YOU LOSE!')}
      {prevMoves.map(move => [
        <div className="prevGuess">
          {move.guess.map(color => <PrevGuessField color={color} />)}
        </div>,
        <div className="clues">
          {renderClues(move.clues.rightColorRightSpot, 'white', 'cluesLeft')}
          {renderClues(move.clues.rightColorWrongSpot, 'black', 'cluesRight')}
        </div>
    ])}
    </div>
  );
};

Board.propTypes = {
  prevMoves: PropTypes.array.isRequired,
};

export default Board;
