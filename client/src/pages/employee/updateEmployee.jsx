import React, { useState } from 'react';
import {
  ActionEditEmployeeUI,
  SET_SHOW_EDIT_EMPLOYEE,
} from '../../state/action';
import useData from '../../state/dataLayer';
import { EmployeeRoles } from '../../utils/constants';
import Drawer from '../../components/drawer/drawer';
import { successToast } from '../../components/notification/notification';

function UpdateEmployee(props) {
  const [empData, setEmpData] = useState({
    name: null,
    phone: null,
    email: null,
    role: null,
    password: null,
  });
  const [, dispatch] = useData();

  const updateEmployee = () => {
    ActionEditEmployeeUI(dispatch, false);
    successToast({
      title: 'Update Employee details',
      message: 'Employee details updated successfully',
    });
  };

  return (
    <Drawer
      header='Update Employee'
      btnLabel='Update'
      btnAction={updateEmployee}
      actionType={SET_SHOW_EDIT_EMPLOYEE}>
      <input
        type='text'
        placeholder='Name'
        value={props.name}
        onChange={e => setEmpData({ ...empData, name: e.target.value })}
      />
      <input
        type='email'
        placeholder='Email Id'
        value={props.email}
        onChange={e => setEmpData({ ...empData, email: e.target.value })}
      />
      <input
        type='tel'
        placeholder='Phone No'
        value={props.phone}
        onChange={e => setEmpData({ ...empData, phone: e.target.value })}
      />
      <input
        type='password'
        placeholder='Password'
        value={props.password}
        onChange={e => setEmpData({ ...empData, password: e.target.value })}
      />
      <select
        name='Select role'
        id='emp-role'
        value={props.role}
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

export default UpdateEmployee;
