import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";

const Profile = ({
  addPost,
  updateNewPostText,
  profilePage: { newPostText, posts },
}) => {
  // console.log(props);
  return (
    <div className=''>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        addPost={addPost}
        newPostText={newPostText}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
};

export default Profile;
