import React, {Component} from 'react';

export class Card extends Component {

  // this.props turned? picture?, done?, id?
  // onClick
  render() {
    let text= `Turn me ${this.props.picture}`;
    let color= "yellow";
    if (this.props.turned) {
      text = this.props.picture;
      color= "lime";
    } else if (this.props.done) {
      text = `Done: ${this.props.picture}`;
      color= "pink";
    }
    return (
      <div style={{
          width: "50px",
          height: "50px",
          margin: "10px",
          backgroundColor: color,
        }}
        onClick={() => this.props.onClick(this.props.id)}
      >
      {text}
      </div>
    );
  }
}
