import React from 'react';
import { createStore, composeReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import {App} from './App';
import {pexeso} from './model';

let store = createStore(pexeso);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.querySelector('#app')
);
