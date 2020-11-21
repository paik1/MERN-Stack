import React from 'react';
import { EmptyState } from '..';
import { ActionAddEmployeeUI } from '../../state/action';
import useData from '../../state/dataLayer';
import AddEmployee from './addEmployee';

function Employee() {
  const [{ uiStates }, dispatch] = useData();

  const addEmployee = () =>
    ActionAddEmployeeUI(dispatch, !uiStates.employee.addEmpDrawer);

  return (
    <div>
      {uiStates.employee.addEmpDrawer && !uiStates.employee.editEmpDrawe && (
        <AddEmployee />
      )}
      <EmptyState stateName={'emp'} actionMethod={addEmployee} />
    </div>
  );
}

export default Employee;
