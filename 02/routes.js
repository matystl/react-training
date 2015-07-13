import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

import {App} from "./components/App"
import {About} from "./components/About"
import {Home} from "./components/Home"

export const routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />
    <Route handler={About} name="about" path='about'/>
  </Route>
);
