import React from 'react';
import {Route} from 'react-router';

import {App} from "./components/App"
import {About} from "./components/About"
import {Home} from "./components/Home"

export const routes = (
  <Route path="/" component={App}>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About}/>
  </Route>
);
