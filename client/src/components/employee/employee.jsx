import React, { Fragment } from 'react';
import { EmptyState, Notification } from '..';
import { ActionAddEmployeeUI } from '../../state/action';
import useData from '../../state/dataLayer';
import AddEmployee from './addEmployee';

function Employee() {
  const [{ uiStates, data }, dispatch] = useData();

  const addEmployee = () =>
    ActionAddEmployeeUI(dispatch, !uiStates.employee.addEmpDrawer);

  return (
    <Fragment>
      {uiStates.employee.addEmpDrawer && !uiStates.employee.editEmpDrawe && (
        <AddEmployee />
      )}

      {data.employee.length > 0 ? (
        <div className='datatable'>
          <div className='datatable__actions'>
            <input type='text' placeholder='Search employee' />
            <div className='datatable__actions__add' onClick={addEmployee}>Add Employee</div>
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
                  <td>{item.email}</td>
                  <td className='datatable__content__body__actions'>
                    <div className='datatable__content__body__actions__update'>
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
