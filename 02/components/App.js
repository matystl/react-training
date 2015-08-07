import React, {Component, findDOMNode} from 'react';
import style  from './App.css';
import {Link, RouteHandler} from 'react-router';
import {Counter} from '../Counter';

export class App extends  Component {
  componentDidMount() {
    console.log("did mount");
  }
  render() {
    return (
      <div className={style.ahoj}>
        <Counter />
        <div>
          <Link to="home" >Home link</Link>
          <Link to="about" >About link</Link>
        </div>
        <div>
          <RouteHandler />
        </div>
      </div>
    );
  }
}
