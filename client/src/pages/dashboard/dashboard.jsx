import React from 'react';
import { Body, Header, Sidebar } from '../../components';
import { DataLayer } from '../../state/dataLayer';
import reducer, { initialState } from '../../state/reducer';

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
