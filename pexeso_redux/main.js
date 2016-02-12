import React from "react";
import ReactDOM from "react-dom";
import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {Provider} from "react-redux";

import {Game} from "./Game";
import {pexesoReducer} from "./model";

const store = createStore(pexesoReducer, undefined,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.querySelector('#app')
);


