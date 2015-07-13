import React, {Component, findDOMNode} from 'react';
import {Link} from 'react-router';
import {increaseCounter, decreaseCounter} from './actions';

import { Connector } from 'redux/react';

function customSelect(state) {
  return { counterData: state.counter };
}

export class Counter extends Component {
  render() {
    const part = this.props.part;
    return (
      <Connector select={(s) => ({counterData: s.counter}) }>{
        ({counterData, dispatch }) => (
          <DumpCounter counter={counterData} d={dispatch} />
        )
      }</Connector>
    );
  }
}

export class DumpCounter extends Component {
  changeBy(value) {
    this.props.d(increaseCounter(value))
  }
  render() {
    return (
      <div> 3
        Counter value: {this.props.counter}
        <button onClick={ () =>this.changeBy(+1) }>+1</button>
        <button onClick={ () =>this.changeBy(-1) }>-1</button>
        <button onClick={ () =>this.changeBy(-100) }>-100</button>
      </div>
    );
  }
}
