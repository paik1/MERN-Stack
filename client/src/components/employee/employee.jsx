import React from 'react';
import { EmptyState } from '..';
import AddEmployee from './addEmployee';

function Employee() {
  return (
    <div>
      <AddEmployee/>
      <EmptyState stateName={'emp'} />
    </div>
  );
}

export default Employee;
