import React, {Component, findDOMNode} from 'react';                 // var React = require('react')
import {Link, RouteHandler} from 'react-router';

import { createRedux } from 'redux';
import { Provider } from 'redux/react';

import * as stores from './counter/store';
import { Connector, connect } from 'redux/react';

import {increaseCounter} from './counter/actions'

const redux = createRedux({
  counter: stores.counter
});

export class App extends Component {
  render() {
    return (
      <Provider redux={redux}>{() =>
        <DumpApp />
      }</Provider>
    );
  }
}

export class DumpApp extends Component {
  render() {
      return (
        <div className="ahoj">
          This is app
          <Link to="domov">Counter link</Link>
          <Link to="about" >About link</Link>
          <RouteHandler />
          <Footer />
        </div>
      )
  }
}

@connect(state => ({
  counter11: state.counter,
}))
export class Footer extends Component {
  render() {
    console.log(this.props.dispatch);
    return (
      <div>
        footer Hodnota countru {this.props.counter11}
        <button onClick={() =>
            this.props.dispatch(
              increaseCounter(47)
            )
          }>
        Increase by 47</button>
      </div>
    );
  }
}
