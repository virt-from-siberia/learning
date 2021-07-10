import React from 'react';
import cn from 'classnames';

import './Section.css';

export const Section = ({
  Icon,
  title,
  color,
  selected
}) => {
  return (
    <div
      className={cn('section', {
        'section--selected': true
      })}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};
