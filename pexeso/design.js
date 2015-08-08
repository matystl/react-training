import React, {Component} from 'react';

export class Row extends Component {
  render() {
    return (
      <div style={{display: "flex",
       flexDirection: "row"}}>
      {this.props.children}
      </div>
    );
  }
}

export class Col extends Component {
  render() {
    return (
      <div style={{display: "flex",
       flexDirection: "column"}}>
      {this.props.children}
      </div>
    );
  }
}
