import React from 'react';
import {render} from 'react-dom';
import { Router, hashHistory } from 'react-router'

import {routes} from './routes';

const appElement = document.getElementById('app');;

render(
  <Router history={hashHistory}>
    {routes}
  </Router>,
  appElement
);
