import React, { Fragment } from 'react';
import { useState } from 'react';
import { EmptyState, Modal, Notification } from '..';
import {
  ActionAddEmployeeUI,
  ActionDeleteEmployeeUI,
  ActionEditEmployeeUI,
} from '../../state/action';
import useData from '../../state/dataLayer';
import ActionBar from '../actionBar/actionBar'
import AddEmployee from './addEmployee';
import UpdateEmployee from './updateEmployee';

function Employee() {
  const [{ uiStates, data }, dispatch] = useData();
  const [selectedEmp, setSelectedEmp] = useState(null);

  const addEmployee = () => ActionAddEmployeeUI(dispatch, true);

  const updateEmployee = empData => {
    setSelectedEmp(empData);
    ActionEditEmployeeUI(dispatch, true);
  };

  const deleteEmployee = empData => {
    setSelectedEmp(empData);
    ActionDeleteEmployeeUI(dispatch, true);
  };

  const closeDeleteModal = () => ActionDeleteEmployeeUI(dispatch, false);

  return (
    <Fragment>
      {uiStates.employee.addEmpDrawer &&
        !uiStates.employee.editEmpDrawer &&
        !uiStates.employee.deleteEmpModal && <AddEmployee />}

      {uiStates.employee.editEmpDrawer &&
        !uiStates.employee.addEmpDrawer &&
        !uiStates.employee.deleteEmpModal && (
          <UpdateEmployee {...selectedEmp} />
        )}

      {uiStates.employee.deleteEmpModal &&
        !uiStates.employee.editEmpDrawer &&
        !uiStates.employee.addEmpDrawer && (
          <Modal
            cancelAction={closeDeleteModal}
            title={`Employee ${selectedEmp.name} is deleting`}
            description={`This is irreversible action, by deleting ${selectedEmp.name} all his data will be deletedAre you sure you want to delete this employee?`}
          />
        )}

      {data.employee.length > 0 ? (
        <div className='datatable'>
         <ActionBar primaryAction={addEmployee} primaryActionLabel="Add Employee" />
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
                    <div
                      className='datatable__content__body__actions__delete'
                      onClick={() => deleteEmployee(item)}>
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
