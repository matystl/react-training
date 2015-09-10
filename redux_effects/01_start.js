// Redux with side effects
// @matystl
// https://github.com/matystl/react-training/tree/master/redux_effects






// What is Redux

// Redux is a predictable state container for JavaScript apps.
// Evolution of flux with emphasis on simple constructs
// http://rackt.github.io/redux/





// Picture of original flux




// Redux overview
//
//    -------------   action   -----------  state, action  ------------
//    |middlewares| ---------> |The store| ------------->  | reducers |
//    -------------            ----------- <------------   ------------
//         ^                        |        new state
//         | action |               |
//         | something for          | new state
//         | middleware            \/
//    ----------------           ------------
//    |action creator| <-------- |   view   |
//    ----------------           ------------
//         ^
//         |
//    ----------------
//    | Other inputs |
//    ----------------

// Actions

// simple object describing what happend in application
let action = {
  type: 'INCREMET_COUNTER',
  by: 1,
}
// let put this action to window so we can use it from console
window.action = action;

// Action creator

// function returning action
function incCounter() {
  return {
    type: 'INCREMET_COUNTER',
    by: 1,
  }
}

// Middlaware

// Functions that modify actions before they land to store
// let's skip them for now

// The store

// entity responsible for storing all data
// not responsible for modifying state but moderate modifiaction
// responsibe for notification about state changes

import { createStore  } from 'redux';

const simpleStore = createStore(counterReducer);
// let put this instance to window so we can use it from console
window.store = simpleStore;


// Reducers

// responsible for modification of state
// something like store in flux but only for modification
// simple function that take state and action and return new state

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMET_COUNTER':
      return state + action.by;
    default:
      return 0;
  }
}

// Let's now return to store

// we can simply get data from store with getState
console.log('State at begging:', simpleStore.getState());



// if we want to modify state we must dispatch action
simpleStore.dispatch(incCounter());
console.log('State at after dispatch:', simpleStore.getState());



// as i said store is responsible for updating if it has new data
// so we can listen to this updates

simpleStore.subscribe(() =>
  console.log('store update:', simpleStore.getState())
);
simpleStore.dispatch(action);
simpleStore.dispatch(incCounter());


// View

// at beginning redux was designed for react
// but up to now we don't use anything react specific
// so any view library that can live with getState and dispatch
// can work with Redux

// React bindings are in package
// https://github.com/rackt/react-redux



// This file is btw fully runnable with help of heatpack
// https://github.com/insin/react-heatpack
// So first small demo how to render something
import React from 'react';

const appDiv = document.querySelector('#app');
React.render(<div>Simple text</div>, appDiv);

// Lets create simple component
// that will get counter and dispach in props

class App extends React.Component {
  render() {
    return (
      <div>
        App component <br />
        value: {this.props.counter}
        <button onClick={() => this.props.dispach(incCounter())}>inc</button>
      </div>
    );
  }
}

// To make this component use redux store
// we need first to define function how to map store state to props
function mapStateToProps(state) {
  return {
    counter: state
  };
}

// and how we want to map dispach to props
function mapDispatchToProps(dispatch) {
  return {
    dispach: dispatch
  };
}

// after we have this 2 function we can use them
// to create smart component from our dump component
// by "connecting" it to redux

import { connect } from 'react-redux';

let AppWithRedux = connect(mapStateToProps, mapDispatchToProps)(App);

// if you want, you can use decorators from es7
// @connect(mapStateToProps, mapDispatchToProps)
// export class App extends React.Component {
// ...
//}


// As you notice we didn't specify how to get to store instance
// as this would be repetitive redux put store instance to react contex
// that way whole render tree will share same instace of store
import { Provider } from 'react-redux';

React.render(
  <Provider store={simpleStore}>
    {() => <AppWithRedux />}
  </Provider>,
  appDiv
);
// note: children of provider is function and it's temporary hack
// until react 0.14 will be released
