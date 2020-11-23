import React from 'react';
import { EmployeeRoles } from '../../utils/constants';

function ActionBar({ primaryActionLabel, primaryAction }) {
  return (
    <div className='actionbar'>
      <input type='text' placeholder='Search employee' />
      <select name='Select role' id='emp-role'>
        <option value='Filter by role' key='roles'>
          Role
        </option>
        {EmployeeRoles.map((role, index) => (
          <option value={role.name} key={index}>
            {role.name}
          </option>
        ))}
      </select>
      <div className='actionbar__primary__btn' onClick={primaryAction}>
        {primaryActionLabel}
      </div>
    </div>
  );
}

export default ActionBar;
