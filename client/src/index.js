import React from 'react';
import ReactDOM from 'react-dom';
import { BaseRoute } from './pages';
import './index.scss'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={BaseRoute} exact />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
