import React from 'react';
import PropTypes from 'prop-types';
import ColorField from './ColorField';
import SelectionField from './SelectionField';

const Controls = (props) => {
  const {
    colors,
    selection,
    onSelect,
    onDelete,
    onClear,
    onSubmit,
  } = props;
  return (
    <div className="controls">
      <div className="selectionPalette">
        {selection.map((color, index) => (
          <SelectionField
            onClear={() => onDelete(index)}
            onSelect={droppedColor => onSelect(droppedColor, index)}
            color={selection[index]}
          >
            {color}
          </SelectionField>
        ))}
      </div>
      <div className="colorPalette">
        {colors.map(color => (
          <ColorField
            color={color}
            onSelect={() => onSelect(color)}
          />
        ))}
      </div>
      <button onClick={onSubmit}>
        Submit guess
      </button>
    </div>
  );
};

Controls.propTypes = {
  colors: PropTypes.array.isRequired,
  selection: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;
