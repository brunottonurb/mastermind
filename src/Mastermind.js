import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import {
  OverlayContainer,
  BoardContainer,
  ControlsContainer
} from './containers';
import './Mastermind.css';

@DragDropContext(HTML5Backend)
export default class Mastermind extends Component {
  render() {
    return (
      <React.Fragment>
        <OverlayContainer />
        <BoardContainer />
        <ControlsContainer />
      </React.Fragment>
    );
  }
}
