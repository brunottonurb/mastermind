import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducer from './reducers';
import Mastermind from './Mastermind';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(
    logger // neat middleware that logs actions
  )
));

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <div>
        <Mastermind />
      </div>
    </Provider>,
    document.getElementById('mount')
  );
});
