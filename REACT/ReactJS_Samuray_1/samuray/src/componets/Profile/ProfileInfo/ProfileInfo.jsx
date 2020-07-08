import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src='https://miro.medium.com/max/1024/1*egOeK5Y9CabeKsnR4vMkhQ.jpeg'
          alt=''
        />
        <div className={classes.descriptionBlock}>ava + decrs</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
