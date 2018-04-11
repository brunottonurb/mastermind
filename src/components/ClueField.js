import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ClueField = (props) => {
  const {
    color,
    className,
  } = props;

  const classes = [
    'clueField',
    { [color]: color },
    className,
  ];

  return (
    <div className={cx(classes)} />
  );
};

ClueField.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ClueField.defaultProps = {
  className: null,
};

export default ClueField;
