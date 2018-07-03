import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Controls } from '../components';
import { COLORS } from '../constants';
import {
  selectColor,
  deleteColor,
  clearSelection,
  submitGuess,
} from '../actions';

const ControlsContainer = (props) => {
  const {
    selection,
    onSelect,
    onDelete,
    onClear,
    onSubmit,
  } = props;

  return (
    <Controls
      colors={COLORS}
      selection={selection}
      onSelect={onSelect}
      onDelete={onDelete}
      onClear={onClear}
      onSubmit={onSubmit}
    />
  );
};

ControlsContainer.propTypes = {
  selection: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ControlsContainer.defaultProps = {
  selection: [null, null, null, null],
};

const mapStateToProps = state => ({
  selection: state.game.selection,
});

const mapDispatchToProps = dispatch => ({
  onSelect: (color, slot) => dispatch(selectColor(color, slot)),
  onDelete: slot => dispatch(deleteColor(slot)),
  onClear: () => dispatch(clearSelection()),
  onSubmit: () => dispatch(submitGuess()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ControlsContainer);
