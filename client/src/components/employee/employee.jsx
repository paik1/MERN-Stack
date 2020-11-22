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
        <table className="custom-table">
          <tr className="custom-table__head">
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
          {data.employee.map((item, index) => (
            <tr className="custom-table__body">
              <td>Username</td>
              <td className="custom-table__body__role"><span>
                Manager</span></td>
              <td>user@mail.com</td>
              <td>+918989878766</td>
              <td className="custom-table__body__actions">
                <div className="custom-table__body__actions__update"><span>Update</span></div>
                <div className="custom-table__body__actions__delete"><span>Delete</span></div>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <EmptyState stateName={'emp'} actionMethod={addEmployee} />
      )}
      <Notification />
    </Fragment>
  );
}

export default Employee;
