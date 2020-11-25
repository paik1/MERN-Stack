import React from 'react';
import ReactDOM from 'react-dom';
import { NotFound } from './pages';
import './scss/main.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import AuthRoute from './pages/authRoute/authRoute';
import { DataLayer } from './state/dataLayer';
import reducer, { initialState } from './state/reducer';
import Landing from './pages/landing/landing';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer reduer={reducer} initialState={initialState}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Landing} exact />
          <Route path='/login' component={Landing} />
          <Route path='/register' component={Landing} />
          <AuthRoute path='/dashboard'>
            <Dashboard />
          </AuthRoute>
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
