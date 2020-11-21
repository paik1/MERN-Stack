import React from 'react';
import './transactions.scss';
import EmptyState from '../emptyState/emptyState';

function Transactions() {
  return (
    <div>
      <EmptyState stateName={'transaction'} />
    </div>
  );
}

export default Transactions;
