import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DragSource } from 'react-dnd';

const colorSource = {
  beginDrag(props) {
    return {
      color: props.color,
    };
  }
};

class ColorField extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
  }

  render() {
    const {
      color,
      connectDragSource,
      isDragging,
      onSelect,
    } = this.props;

    const classes = [
      'colorField',
      { isDragging },
      color,
    ];

    return connectDragSource(
      <div
        className={cx(classes)}
        onClick={onSelect}
      />
    );
  }
}

export default DragSource('COLOR', colorSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(ColorField);
