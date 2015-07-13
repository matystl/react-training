import React from 'react';
import Router from 'react-router';
import {routes} from './routes';

const appElement = document.querySelector('#app');

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, appElement);
});
