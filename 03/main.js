import React from 'react';
import Router from 'react-router';
import {routes} from './routes';
import Immutable from 'immutable';

Router.run(routes, Router.HistoryLocation, (Handler) => {
  window.x = () => React.render(<Handler />, document.getElementById('app'));
  window.x();
});


const x = Immutable.fromJS([11,22,33]);
console.log(x);
console.log(`first element ${x.get(0)}`);
const [a,b,c] = x
console.log(`first element ${a} ${b} ${c}`);
