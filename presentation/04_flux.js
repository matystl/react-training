// Flux

// Original
//https://facebook.github.io/flux/
// Redux
//http://gaearon.github.io/redux/



import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from "redux";
import {Provider, connect} from "react-redux";

// action type
const INC = 'inc';

//action creator
const acIncrement = () => (/*action*/{type: INC, +1});
const acDecrement = () => ({type: INC, -1});

// like store in flux
// reducer
function counterReducer(state = 0, {type, by} ) {
  switch  (type) {
    case INC:
     return state + by
    default:
     return state
  }
}

const store = ((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore))(counterReducer)

const mapStateToProps = (state) => ({
  mojCounterInProps: state
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({acIncrement, acDecrement},dispatch);

const Counter = connect(mapStateToProps, mapDispatchToProps)(
  ({mojCounterInProps, acIncrement, acDecrement}) =>
    <div>
      Counter: {mojCounterInProps}
      <button onClick={acIncrement}>+1</button>
      <button onClick={acDecrement}>-1</button>
    </div>
);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.querySelector('#app'));
