import React from 'react';

import { Checkbox, IconButton } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import './EmailRow.css';

export function EmailRow({
  title,
  subject,
  description,
  time
}) {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>{subject}</h4>
        <span className="emailRow__description">
          {description}
        </span>
      </div>
      <div className="emailRow__description">{time}</div>
    </div>
  );
}
