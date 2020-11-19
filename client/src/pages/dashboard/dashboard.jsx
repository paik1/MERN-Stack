import React, { Fragment } from 'react';
import './dashboard.scss';
import { Body, Header, Sidebar } from '../../components';

function Dashboard() {
  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard__body'>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default Dashboard;
