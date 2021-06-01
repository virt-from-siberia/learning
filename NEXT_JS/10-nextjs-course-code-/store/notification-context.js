import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotifications: function (notificationData) {},
  hideNotification: function () {},
});

export const NOTIFICATION_STATUS = {
  SUCCESS: "success",
  ERROR: "error",
  PENDING: "pending",
};

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState("");

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === NOTIFICATION_STATUS.SUCCESS ||
        activeNotification.status === NOTIFICATION_STATUS.ERROR)
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotifications: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
