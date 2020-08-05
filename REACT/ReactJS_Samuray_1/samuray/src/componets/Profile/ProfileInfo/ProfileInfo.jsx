import React from "react";
import classes from "./ProfileInfo.module.css";
import Loader from "../../Loader/Loader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <img
          src='https://miro.medium.com/max/1024/1*egOeK5Y9CabeKsnR4vMkhQ.jpeg'
          alt=''
        />
        <div className={classes.descriptionBlock}>
          {props.profile.photos.large ? (
            <img src={props.profile.photos.large} alt='avatar' />
          ) : (
            <img
              className={classes.emptyAvatar}
              src='https://image.shutterstock.com/image-vector/male-avatar-profile-picture-use-260nw-193292033.jpg'
              alt='avatar'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
