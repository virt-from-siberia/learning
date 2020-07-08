import React from "react";
import Post from "./Post//Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";

import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} key={p.id} />;
  });

  const newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
