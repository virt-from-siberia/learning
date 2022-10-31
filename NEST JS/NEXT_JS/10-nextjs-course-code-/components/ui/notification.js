import { useContext } from "react";

import NotificationContext from "../../store/notification-context";
import { NOTIFICATION_STATUS } from "../../store/notification-context";

import classes from "./notification.module.css";

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = "";

  if (status === NOTIFICATION_STATUS.SUCCESS) {
    statusClasses = classes.success;
  }

  if (status === NOTIFICATION_STATUS.ERROR) {
    statusClasses = classes.error;
  }

  if (status === NOTIFICATION_STATUS.PENDING) {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
