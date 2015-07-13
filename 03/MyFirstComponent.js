import React, {Component, findDOMNode} from 'react';

export class MyFirstComponent extends Component {
  render() {
    return (
      <div>
        <div >{this.props.textInputu}</div>
      </div>
    );
  }
};
