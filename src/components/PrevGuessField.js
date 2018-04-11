import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const PrevGuessField = (props) => {
  const {
    color,
  } = props;

  const classes = [
    'prevGuessField',
    color || 'grey',
  ];

  return (
    <div className={cx(classes)} />
  );
};

PrevGuessField.propTypes = {
  color: PropTypes.string.isRequired,
};

export default PrevGuessField;
