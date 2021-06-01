import { useState, useEffect, useContext } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import NotificationContext from "../../store/notification-context";
import { NOTIFICATION_STATUS } from "../../store/notification-context";

import classes from "./comments.module.css";

function Comments(props) {
  const { eventId } = props;
  const notificationCtx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      updateComments();
    }
  }, [showComments]);

  function updateComments() {
    setIsFetchingComments(true);

    fetch("/api/comments/" + eventId)
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comment);
        setIsFetchingComments(false);
      });
  }

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationCtx.showNotifications({
      title: "Sending comment",
      message: "Your comment is currently being added ",
      status: NOTIFICATION_STATUS.PENDING,
    });

    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then(() => {
        updateComments();
        
        notificationCtx.showNotifications({
          title: "Success",
          message: "Your comment has been added",
          status: NOTIFICATION_STATUS.SUCCESS,
        });
      })
      .catch((error) => {
        notificationCtx.showNotifications({
          title: "Error!",
          message: error.message || "Something went wrong",
          status: NOTIFICATION_STATUS.ERROR,
        });
      });
    // send data to API
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList items={comments} />}
      {showComments && isFetchingComments && <p>Loading...</p>}
    </section>
  );
}

export default Comments;
