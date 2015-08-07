import React, {Component} from 'react';

export class Card extends Component {
  render() {
    let color = "red";
    let text = `Turn me - ${this.props.item.picture}`;
    let handler = this.props.onClick;
    if (this.props.done) {
      color = "yellow";
      text = `Done - ${this.props.item.picture}`;
      handler = () => null;
    } else if (this.props.turned) {
      color = "green";
      text = `${this.props.item.picture}`;
    }
    return (
      <div style={{margin: "10px", height: "50px", width: "50px", backgroundColor: color }} onClick={handler}>
        <div>{text}</div>
      </div>
    );
  }
}
