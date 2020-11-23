import React, { useState } from 'react';
import {
  ActionAddEmpData,
  ActionAddEmployeeUI,
  SET_SHOW_ADD_EMPLOYEE,
} from '../../state/action';
import useData from '../../state/dataLayer';
import { EmployeeRoles } from '../../utils/constants';
import Drawer from '../../components/drawer/drawer';
import { successToast } from '../../components/notification/notification';

function AddEmployee() {
  const [empData, setEmpData] = useState({
    name: null,
    phone: null,
    email: null,
    role: null,
    password: null,
  });
  const [, dispatch] = useData();
  
  const addEmployee = () => {
    ActionAddEmpData(dispatch, empData);
    ActionAddEmployeeUI(dispatch, false);
    successToast({
      title: 'Adding Employee',
      message: 'Employee added successfully',
    });
  };

  return (
    <Drawer
      header='Add Employee'
      btnLabel='Add'
      btnAction={addEmployee}
      actionType={SET_SHOW_ADD_EMPLOYEE}>
      <input
        type='text'
        placeholder='Name'
        onChange={e => setEmpData({ ...empData, name: e.target.value })}
      />
      <input
        type='email'
        placeholder='Email Id'
        onChange={e => setEmpData({ ...empData, email: e.target.value })}
      />
      <input
        type='tel'
        placeholder='Phone No'
        onChange={e => setEmpData({ ...empData, phone: e.target.value })}
      />
      <input
        type='password'
        placeholder='Password'
        onChange={e => setEmpData({ ...empData, password: e.target.value })}
      />
      <select
        name='Select role'
        id='emp-role'
        onChange={e => setEmpData({ ...empData, role: e.target.value })}>
        <option value='Select Role' key='roles'>
          Select Role
        </option>
        {EmployeeRoles.map((role, index) => (
          <option value={role.name} key={index}>
            {role.name}
          </option>
        ))}
      </select>
    </Drawer>
  );
}

export default AddEmployee;
