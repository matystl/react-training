import React, {Component, findDOMNode} from 'react';
import style from './First.css';

// props theme
export class First extends Component {
  render() {
    return (
      <div>
          Text: {this.props.inputValue}
          <input value={this.props.inputValue}
                 onChange={this.props.onChange} ></input>
      </div>
    );
  }
};
