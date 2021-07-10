import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';

import './SendMail.css';

export const SendMail = () => {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New message</h3>
        <CloseIcon className="sendMail__close" />
      </div>

      <form>
        <input type="text" className="" />
        <input type="text" className="" />
        <input type="text" className="" />

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};
