import React, { useState, useCallback } from "react";
import Notification from "../Notification";

const useToast = (position = "top-right") => {
  const [notification, setnotification] = useState(null);
  let timer;
  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer);
    setnotification(notificationProps);
    timer = setTimeout(() => {
      setnotification(null);
    }, notificationProps.duration);
  }, []);

  const NotificationComponent = notification && (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  );

  return { NotificationComponent, triggerNotification };
};

export default useToast;
