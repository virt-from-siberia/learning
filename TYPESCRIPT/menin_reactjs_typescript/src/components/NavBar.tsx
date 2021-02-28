import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className='nav-wrapper purple darken-2 px1'>
        <div className=''>
          <NavLink to='/' className='brand-logo'>
            React + Typescript
          </NavLink>
          <ul className='right hide-on-med-and-down'>
            <li>
              <NavLink to='/about'>Список дел</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
