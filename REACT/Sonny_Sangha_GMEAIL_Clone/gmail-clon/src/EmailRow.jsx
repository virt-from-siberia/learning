import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { selectMail } from './features/mailSlice';

import { Checkbox, IconButton } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import './EmailRow.css';

export function EmailRow({
  id,
  title,
  subject,
  description,
  time
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time
      })
    );
    
    history.push('/mail');
  };

  return (
    <div onClick={openMail} className="emailRow">
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
        <h4>{subject} </h4>
        <span className="emailRow__description">
          {description}
        </span>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  );
}
