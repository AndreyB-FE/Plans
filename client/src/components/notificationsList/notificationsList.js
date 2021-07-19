import React, { useState, useEffect } from "react";
import Notification from "../notification/notification";
import "./notificationsList.scss";

const notificationsList = () => {
  const [notifications, setNotifications] = useState([]);
  const getNotifications = async () => {
    const response = await fetch("/api/notifications");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  const deleteNotifications = async (id) => {
    const response = await fetch(`/api/notifications/${id}`, {
      method: "DELETE",
    });
    if (response.status !== 200) throw Error(response.message);
    else {
      setNotifications(notifications.filter((item) => item.id !== id));
    }
    return response;
  };

  useEffect(() => {
    getNotifications().then((res) => {
      setNotifications(...notifications, res.express);
    });
  }, []);

  return (
    <div className="notificationsList">
      {notifications &&
        notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              {...notification}
              onDelete={() => deleteNotifications(notification.id)}
            ></Notification>
          );
        })}
    </div>
  );
};

export default notificationsList;
