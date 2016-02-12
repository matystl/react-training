import React, {Component, findDOMNode} from 'react';
import style  from './App.css';
import {Link} from 'react-router';

export class App extends  Component {
  render() {
    return (
      <div className={style.ahoj}>
        <div>
          <Link to="/home" >Home link</Link>
          <Link to="/about" >About link</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
