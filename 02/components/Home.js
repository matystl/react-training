import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

export class Home extends  Component {
  state = {
    counter: 7,
    todos: [],
  };

  increase() {
    this.setState({counter: this.state.counter + 1});
  }

  decrease() {
    this.setState({counter: this.state.counter - 1});
  }

  addItem() {
    const input = findDOMNode(this.refs.test);
    const {value} = input;
    this.setState({...this.state, todos: [value, ...this.state.todos]});
    input.value = "";
  }

  render() {
    return (
      <div>
        <div>Nejaky random text</div>
        <hr />
        <div>{this.state.counter}</div>
        <button onClick={::this.decrease}>-1</button>
        <button onClick={::this.increase}>+1</button>
        <hr />
        <div><input ref="test"/></div>
        <div><button onClick={::this.addItem}>Add item</button></div>
        <ul>
          {this.state.todos.map((item, i) =>
            <li key={i}>{item}</li>)
          }
        </ul>

      </div>
    );
  }
}
