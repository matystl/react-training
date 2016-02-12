import React from 'react';
import { createStore, composeReducers, compose } from 'redux';
import { Provider } from 'react-redux';

import {App} from './App';
import {pexesoReducer} from './model';

let store = createStore(pexesoReducer, undefined,  (window.devToolsExtension ? window.devToolsExtension() : f => f));

React.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
