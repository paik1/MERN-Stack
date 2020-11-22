import React, { Fragment } from 'react';
import { useState } from 'react';
import { EmptyState, Notification } from '..';
import { ActionAddEmployeeUI, ActionEditEmployeeUI } from '../../state/action';
import useData from '../../state/dataLayer';
import AddEmployee from './addEmployee';
import UpdateEmployee from './updateEmployee';

function Employee() {
  const [{ uiStates, data }, dispatch] = useData();
  const [selectedEmp, setSelectedEmp] = useState(null);

  const addEmployee = () =>
    ActionAddEmployeeUI(dispatch, !uiStates.employee.addEmpDrawer);

  const updateEmployee = empData => {
    setSelectedEmp(empData);
    ActionEditEmployeeUI(dispatch, true);
  };

  return (
    <Fragment>
      {uiStates.employee.addEmpDrawer && !uiStates.employee.editEmpDrawe && (
        <AddEmployee />
      )}
      {uiStates.employee.editEmpDrawe &&
        !uiStates.employee.addEmpDrawer &&
        <UpdateEmployee {...selectedEmp} />
      }

      {data.employee.length > 0 ? (
        <div className='datatable'>
          <div className='datatable__actions'>
            <input type='text' placeholder='Search employee' />
            <div className='datatable__actions__add' onClick={addEmployee}>
              Add Employee
            </div>
          </div>
          <table className='datatable__content'>
            <thead>
              <tr className='datatable__content__head'>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.employee.map((item, index) => (
                <tr className='datatable__content__body' key={index}>
                  <td>{item.name}</td>
                  <td className='datatable__content__body__role'>
                    <span>{item.role}</span>
                  </td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td className='datatable__content__body__actions'>
                    <div
                      className='datatable__content__body__actions__update'
                      onClick={() => updateEmployee(item)}>
                      <span>Update</span>
                    </div>
                    <div className='datatable__content__body__actions__delete'>
                      <span>Delete</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState stateName={'emp'} actionMethod={addEmployee} />
      )}
      <Notification />
    </Fragment>
  );
}

export default Employee;
