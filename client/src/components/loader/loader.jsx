import React from 'react';

function Loader({ size }) {
  return (
    <div className={`loader modal-${size}`}>
      <div className='loader__ripple' />
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
