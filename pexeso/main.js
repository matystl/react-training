import React from 'react';
import { createStore, composeReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor';

import {App} from './App';
import {pexeso} from './model';

const finalCreateStore = compose(
  devTools(),
  createStore
);
let store = finalCreateStore(pexeso);

// let store = createStore(pexeso);

React.render(
  <div>
    <Provider store={store}>
      {() => <App />}
    </Provider>

    <DebugPanel top right bottom>
      <DevTools store={store}
              monitor={LogMonitor} />
    </DebugPanel>
    
  </div>,
  document.querySelector('#app')
);
