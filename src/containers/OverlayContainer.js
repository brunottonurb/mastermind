import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Overlay } from '../components';
import { newGame } from '../actions';

const OverlayContainer = (props) => {
  const {
    won,
    lost,
    combi,
    remainingTries,
    startNew,
  } = props;

  return (
    <Overlay
      won={won}
      lost={lost}
      combi={combi}
      remainingTries={remainingTries}
      startNew={startNew}
    />
  );
};

OverlayContainer.propTypes = {
  won: PropTypes.bool.isRequired,
  lost: PropTypes.bool.isRequired,
  combi: PropTypes.array.isRequired,
  remainingTries: PropTypes.number.isRequired,
  startNew: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  won: state.game.won,
  lost: state.game.lost,
  combi: state.game.combi,
  remainingTries: state.game.remainingTries,
});

const mapDispatchToProps = dispatch => ({
  startNew: () => dispatch(newGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OverlayContainer);
