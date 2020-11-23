import React from 'react';
import { EmployeeRoles } from '../../utils/constants';

function ActionBar({
  primaryActionLabel,
  primaryAction,
  enableRoleFilter,
  enableSearch,
  searchCallback,
  roleFilterCallBack
}) {
  return (
    <div className='actionbar'>
      {enableSearch && (
        <input
          type='text'
          placeholder='Search employee'
          onChange={e => searchCallback(e.target.value)}
        />
      )}
      {enableRoleFilter && (
        <select name='Select role' id='emp-role' onChange={e => roleFilterCallBack(e.target.value)}>
          <option value='reset' key='roles'>
            Role
          </option>
          {EmployeeRoles.map((role, index) => (
            <option value={role.name} key={index}>
              {role.name}
            </option>
          ))}
          
        </select>
      )}
      <div className='actionbar__primary__btn' onClick={primaryAction}>
        {primaryActionLabel}
      </div>
    </div>
  );
}

export default ActionBar;
