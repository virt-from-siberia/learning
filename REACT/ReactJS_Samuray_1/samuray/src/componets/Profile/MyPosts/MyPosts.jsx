import React from "react";
import Post from "./Post//Post";
import classes from "./MyPosts.module.css";

const MyPosts = ({ posts, addPost, updateNewPostText, newPostText }) => {
  const postsElements = posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} key={p.id} />;
  });

  const newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    addPost(text);
    newPostElement.current.value = "";
  };

  let onPostChange = (evt) => {
    updateNewPostText(evt.target.value);
    newPostElement.current.value = "";
  };

  return (
    <div className={classes.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
