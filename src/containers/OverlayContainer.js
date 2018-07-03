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
    showInstructions,
  } = props;

  return (
    <Overlay
      won={won}
      lost={lost}
      combi={combi}
      remainingTries={remainingTries}
      startNew={startNew}
      showInstructions={showInstructions}
    />
  );
};

OverlayContainer.propTypes = {
  won: PropTypes.bool,
  lost: PropTypes.bool,
  combi: PropTypes.array,
  remainingTries: PropTypes.number,
  startNew: PropTypes.func.isRequired,
  showInstructions: PropTypes.bool.isRequired,
};

OverlayContainer.defaultProps = {
  won: false,
  lost: false,
  combi: null,
  remainingTries: null,
};

const mapStateToProps = ({ game }) => ({
  won: game.won,
  lost: game.lost,
  combi: game.combi,
  remainingTries: game.remainingTries,
  showInstructions: game.showInstructions,
});

const mapDispatchToProps = dispatch => ({
  startNew: () => dispatch(newGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OverlayContainer);
