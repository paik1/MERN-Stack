import React from 'react';
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
