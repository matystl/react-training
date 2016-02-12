// So lets reacp what we have here
import React from 'react';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';

// define action type
const INC = 'increment';

// define action creator
function inc() {
  return {
    type: INC
  }
}

// define reducers
function counterReducer(state = 0, {type}) {
  switch (type) {
    case INC: return state + 1;
    default: return state;
  }
}

// create store
let store = createStore(counterReducer);

// create dump component
class Counter extends React.Component {
  render() {
    return (
      <div>
        Counter: {this.props.counter}
        <button onClick={this.props.inc}>inc</button>
      </div>
    )
  }
}

// create smart component
const App = @connect(
  (state) => ({counter: state}),
  (dispatch) => ({inc: () => dispatch(inc())})
) //from dump component
class App extends React.Component {
  render() {
    return <Counter {...this.props}/>
  }
}

// render our component
React.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);

// Only one store and reducer is little bit limiting
// but because our building blocks are simple we can do with them what we want
// so let's create composed store

function dumptwoCounters(state, action) {
  return {
    counterA: counterReducer((state)?state.counterA: state, action),
    counterB: counterReducer((state)?state.counterB: state, action),
  }
}

@connect(
  state => state
)
class TwoCounterApp extends React.Component {
  render() {
    return (
      <div>
        <Counter counter={this.props.counterA} inc={() => this.props.dispatch(inc())} />
        <Counter counter={this.props.counterB} inc={() => this.props.dispatch(inc())} />
      </div>
    )
  }
}

//renderNewReducer(dumptwoCounters, TwoCounterApp);








// now let's fix updating without editing original
// reducer or action creator

// so we need to have sperate action to distinguish between two counters
function incByTypeFactory(type) {
  return () => ({...inc(), counterId: type});
}
let incA = incByTypeFactory('counterA');
let incB = incByTypeFactory('counterA');

function smartTwoCounters(state, action) {
  let {counterId} = action;
  switch (counterId) {
    case 'counterA':
      return {...state, counterA: counterReducer(state.counterA, action)}
    case 'counterB':
      return {...state, counterB: counterReducer(state.counterB, action)}
    default:
      return {
        counterA: counterReducer(state, action),
        counterB: counterReducer(state, action),
      }
  }
}

// and for binding dispatch to action creators we can use bindActionCreators
import { bindActionCreators } from 'redux';

@connect(
  state => state,
  dispatch => bindActionCreators({
    incA,
    incB,
  }, dispatch)
)
class SmartTwoCounterApp extends React.Component {
  render() {
    return (
      <div>
        <Counter counter={this.props.counterA} inc={this.props.incA} />
        <Counter counter={this.props.counterB} inc={this.props.incB} />
      </div>
    )
  }
}

//renderNewReducer(smartTwoCounters ,SmartTwoCounterApp);






// usualy you don't need to combine reducers manualy but you can use helper
// combineReducers
(`
import {combineReducers} from 'redux';
import {userReducer} from './user/reducer';
import {itemsReducer} from './items/reducer';

let resultReducer = combineReducers({
  user: userReducer,
  data: {
    items: itemsReducer
  },
})
`)

// Times when you need to combine them is when you would need
// waitFor in original flux.

// Another example where you want to do
// it manualy is if you need to read state from another reducer.
(`
function reducerA(state, action) {}
function reducerB(stateFromReducerA, myState, action) {}

function combinnedReducer(state, action) {
  if (! state) {
    let resultA = reducerA(undefined, action);
    let resultB = reducerB(resultA, undefined, action);
    return {
      reducerA: resultA,
      reducerB: resultB,
    }
  }
  let resultA = reducerA(state.reducerA, action);
  let resultB = reducerB(resultA, state.reducerB, action);
  return {
    reducerA: resultA,
    reducerB: resultB,
  }
}
`)








// create helper for rendering new app with new store
function renderNewReducer(reducer, component) {
  let store = createStore(reducer)
  React.unmountComponentAtNode(document.querySelector('#app'));
  React.render(
    <Provider store={store}>{
      React.createElement(component)
    }</Provider>,
    document.querySelector('#app')
  );
}
