import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';
import {App} from './App';
import {Home} from './Home';
import {About} from './About';
import {Counter} from './counter/Counter';

export const routes = (
  <Route handler={App} path="/">
    <Route handler={Counter} path="home" name="domov"/>
    <Route handler={About} path="about" name="about" />
  </Route>
);


/*
<Route handler={App} path="/">
  <DefaultRoute handler={Home} name="home" />
  <Route handler={About} name="about" path='about'/>
</Route>

*/
