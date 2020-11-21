import React from 'react';
import { SET_SHOW_ADD_EMPLOYEE } from '../../state/action';
import { EmployeeRoles } from '../../utils/constants';
import Drawer from '../drawer/drawer';

function AddEmployee() {
  const addEmployee = () => console.log('Add Employee action');

  return (
    <Drawer
      header='Add Employee'
      btnLabel='Add'
      btnAction={addEmployee}
      actionType={SET_SHOW_ADD_EMPLOYEE}>
      <input type='text' placeholder='Name' />
      <input type='email' placeholder='Email Id' />
      <input type='bumber' placeholder='Phone No' />
      <input type='password' placeholder='Password' />
      <select name='Select role' id='emp-role'>
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
