import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DropTarget } from 'react-dnd';

const colorTarget = {
  drop(props, monitor) {
    // Obtain the dragged item
    const { color } = monitor.getItem();
    props.onSelect(color);

    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    return { moved: true };
  }
};

@DropTarget('COLOR', colorTarget, (connect, monitor) => ({
  // Call this function inside render()
  // to let React DnD handle the drag events:
  connectDropTarget: connect.dropTarget(),
  // You can ask the monitor about the current drag state:
  isOver: monitor.isOver(),
}))
class SelectionField extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    onClear: PropTypes.func.isRequired,
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
