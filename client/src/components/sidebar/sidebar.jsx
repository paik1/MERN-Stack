import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuItems } from '../../utils/constants';

function Sidebar() {
  return (
    <aside className='sidebar'>
      {MenuItems.map((item, index) => {
        return (
          <div className='sidebar__item' key={index}>
            <NavLink
              to={`/dashboard/${item.link}`}
              activeClassName={'active-menu-item' }>
              <img className="sidebar__item__image" src={item.iconPath} alt={`${item.name}-icon`} />
              <span>{item.name}</span>
            </NavLink>
          </div>
        );
      })}
    </aside>
  );
}

export default Sidebar;
