import React from 'react';
import { Body, Header, Notification, Sidebar } from '../../components';

function Dashboard() {
  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard__body'>
        <Sidebar />
        <Body />
      </div>
      <Notification />
    </div>
  );
}

export default Dashboard;
