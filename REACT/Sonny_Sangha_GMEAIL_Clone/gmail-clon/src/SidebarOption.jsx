import React from 'react';
import cn from 'classnames';

import './SidebarOption.css';

export function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div
      className={cn('sidebarOption', {
        'sidebarOption--active': selected
      })}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}
