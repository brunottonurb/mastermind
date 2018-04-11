import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Board } from '../components';

const BoardContainer = (props) => {
  const {
    prevMoves,
  } = props;

  return (
    <Board
      prevMoves={prevMoves}
    />
  );
};

BoardContainer.propTypes = {
  prevMoves: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  prevMoves: state.game.prevRounds,
});

export default connect(
  mapStateToProps,
)(BoardContainer);
