import React, { Fragment } from 'react';
import { useState } from 'react';
import { EmptyState, Modal, NoData, successToast } from '../../components';
import {
  ActionAddEmpData,
  ActionAddEmployeeUI,
  ActionDeleteEmployeeUI,
  ActionEditEmployeeUI,
  SET_SHOW_DELETE_EMPLOYEE,
} from '../../state/action';
import useData from '../../state/dataLayer';
import ActionBar from '../../components/actionBar/actionBar';
import AddEmployee from './addEmployee';
import UpdateEmployee from './updateEmployee';
import { useEffect } from 'react';
import { getAllEmployees } from '../../service/employeeSvc';

function Employee() {
  const [{ uiStates, data }, dispatch] = useData();
  const [employees, setEmployees] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState(null);
  const keys = ['Name', 'Role', 'Email', 'Phone', 'Actions'];

  useEffect(() => {
    if (data.employee.length === 0) {
      getEmployees();
    } else {
      setEmployees([...data.employee]);
    }
  }, [data.employee]);

  const getEmployees = async () => {
    const empData = await getAllEmployees();
    ActionAddEmpData(dispatch, empData);
    setEmployees([...empData]);
  };

  const openAddEmpDrawer = () => ActionAddEmployeeUI(dispatch, true);

  const openUpdateEmpDrawer = empData => {
    setSelectedEmp(empData);
    ActionEditEmployeeUI(dispatch, true);
  };

  const openDeleteEmpModal = empData => {
    setSelectedEmp(empData);
    ActionDeleteEmployeeUI(dispatch, true);
  };

  const deleteEmployee = () => {
    ActionDeleteEmployeeUI(dispatch, false);
    successToast({
      title: 'Delete Employee',
      message: 'Employee deleted successfully',
    });
  };

  const searchEmployee = query => console.log(query);

  const selectedRole = role => {
    role === 'reset'
      ? setEmployees(data.employee)
      : setEmployees(
          data.employee.filter(emp => emp.role.toLowerCase() === role)
        );
  };

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
            actionMethod={deleteEmployee}
            actionType={SET_SHOW_DELETE_EMPLOYEE}
            title={`Employee ${selectedEmp.name} is deleting`}
            description={`This is irreversible action, by deleting ${selectedEmp.name} all his data will be deletedAre you sure you want to delete this employee?`}
          />
        )}

      {data.employee.length > 0 ? (
        <div className='datatable'>
          <ActionBar
            searchCallback={searchEmployee}
            roleFilterCallBack={selectedRole}
            enableRoleFilter={true}
            enableSearch={true}
            primaryAction={openAddEmpDrawer}
            primaryActionLabel='Add Employee'
          />
          {employees.length > 0 ? (
            <table className='datatable__content'>
              <thead className='datatable__content__head'>
                <tr>
                  {keys.map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {employees.map((item, index) => (
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
                        onClick={() => openUpdateEmpDrawer(item)}>
                        <span>Update</span>
                      </div>
                      <div
                        className='datatable__content__body__actions__delete'
                        onClick={() => openDeleteEmpModal(item)}>
                        <span>Delete</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <NoData message={'No employee data found'} />
          )}
        </div>
      ) : (
        <EmptyState stateName={'emp'} actionMethod={openAddEmpDrawer} />
      )}
      {/* <Notification /> */}
    </Fragment>
  );
}

export default Employee;
