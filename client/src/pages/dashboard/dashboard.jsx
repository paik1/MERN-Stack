import React, { Fragment } from 'react';
import './dashboard.scss';
import { Body, Header, Sidebar } from '../../components';
import { DataLayer } from '../../state/dataLayer';
import reducer, { initialState } from '../../state/reduce';

function Dashboard() {
  return (
    <DataLayer reduer={reducer} initialState={initialState}>
      <div className='dashboard'>
        <Header />
        <div className='dashboard__body'>
          <Sidebar />
          <Body />
        </div>
      </div>
    </DataLayer>
  );
}

export default Dashboard;
