import React from 'react';
import './stocks.scss';
import EmptyState from '../emptyState/emptyState';

function Stocks() {
  return (
    <div>
      <EmptyState stateName={'stocks'} />
    </div>
  );
}

export default Stocks;
