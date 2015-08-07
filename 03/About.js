import React, {Component, findDOMNode} from 'react';
import {Link} from 'react-router';

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

export class About extends Component {
  state = {
    height: 0,
    width: 0,
    order: [1,2,3],
  }
  shouldComponentUpdate() {
    return true;
  }

  renderCircle({height, width}) {
    return <circle cx={height/2} cy={height/2} r={height/2*0.9} stroke="black" stroke-width="3" fill="red" />
  }

  render() {
    console.log("about rendered");
    return (
      <div>
        <svg {...this.state}>
          {this.renderCircle(this.state)}
        </svg>
        "Hello from about"
        <button onClick={() =>
          this.setState({width: this.state.width +20,
            height: this.state.height + 20 })}> Zvec
        </button>
        {this.state.order.map((i) => {
          return <ListItem key={i} x={i}></ListItem>
        })}
        <button onClick={()=>{ this.setState({order: shuffle(this.state.order)});}}>Shuffle</button>
      </div>
    );
  }
}

export class ListItem extends Component {
  state = {
    test: 5
  }
  test = 5;

  render() {
    return (
      <div>
        {this.props.x} - {this.test} - {this.state.test}
        <button onClick={()=>{ this.test++;this.setState({test: this.test})}}>Increase</button>
      </div>
    );
  }
}
