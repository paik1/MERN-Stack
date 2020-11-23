import React from 'react';

function NoData({ message }) {
  return (
    <div className='no-data'>
      <h3>{message}</h3>
    </div>
  );
}

export default NoData;
