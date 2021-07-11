import React, { useEffect, useState } from 'react';
import { db } from './firebase';

import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RadioIcon from '@material-ui/icons/Radio';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import { EmailRow } from './EmailRow';
import { Section } from './Section';

import './EmailList.css';

export function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    console.log('fetch');
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RadioIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section
          Icon={InboxIcon}
          title="primary"
          color="red"
          selected={false}
        />
        <Section
          Icon={PeopleIcon}
          title="primary"
          color="red"
          selected
        />
        <Section
          Icon={LocalOfferIcon}
          title="primary"
          color="red"
          selected
        />
      </div>

      <div className="emailList__list">
        {emails.map(
          ({
            id,
            data: { to, subject, message, timestamp }
          }) => (
            <EmailRow
              id={id}
              key={id}
              title={to}
              subject={subject}
              description={message}
              time={new Date(
                timestamp?.seconds * 1000
              ).toUTCString()}
            />
          )
        )}
      </div>
    </div>
  );
}
