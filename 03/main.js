import React from 'react';
import Router from 'react-router';
import {routes} from './routes';
import Immutable from 'immutable';

Router.run(routes, Router.HistoryLocation, (Handler) => {
  window.x = () => React.render(<Handler />, document.getElementById('app'));
  window.x();
});
