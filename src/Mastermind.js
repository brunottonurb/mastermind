import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import {
  OverlayContainer,
  BoardContainer,
  ControlsContainer
} from './containers';
import './Mastermind.scss';

class Mastermind extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="mastermindWrapper">
        <OverlayContainer />
        <BoardContainer />
        <ControlsContainer />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Mastermind);
