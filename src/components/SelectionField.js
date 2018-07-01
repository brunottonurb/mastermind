import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DropTarget } from 'react-dnd';

const colorTarget = {
  drop(props, monitor) {
    const { color } = monitor.getItem();
    props.onSelect(color);
    return { moved: true };
  }
};

@DropTarget('COLOR', colorTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
}))
class SelectionField extends Component {
  static propTypes = {
    color: PropTypes.string,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    onClear: PropTypes.func.isRequired,
  }

  static defaultProps = {
    color: null,
  }

  render() {
    const {
      color,
      isOver,
      connectDropTarget,
      onClear,
    } = this.props;

    const classes = [
      'selectionField',
      { isOver },
      color || 'grey',
    ];

    return connectDropTarget(
      <div
        className={cx(classes)}
        onClick={onClear}
      />
    );
  }
}

export default SelectionField;
