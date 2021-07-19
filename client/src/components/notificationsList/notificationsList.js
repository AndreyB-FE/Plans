import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setAllNotifications,
  deleteNotification,
  deleteAllNotifications,
} from "../../actions/";
import Notification from "../notification/notification";
import "./notificationsList.scss";

const notificationsList = () => {
  const [notifications, setNotifications] = useState([]);
  const numNotifications = useSelector(
    (state) => state.setNotificationsReducer
  );
  const dispatch = useDispatch();

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
      dispatch(deleteNotification());
    }
    return response;
  };

  useEffect(() => {
    getNotifications()
      .then((res) => {
        setNotifications(...notifications, res.express);
        return res.express;
      })
      .then((notifications) => {
        dispatch(setAllNotifications(notifications.length));
      });
  }, []);

  return (
    <div className="notificationsList">
      {notifications.length ? (
        <div className="announce">
          You have {numNotifications} notification{numNotifications > 1 && "s"}
        </div>
      ) : null}
      {notifications.length ? (
        notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              {...notification}
              onDelete={() => deleteNotifications(notification.id)}
            ></Notification>
          );
        })
      ) : (
        <div className="no-notifications">You don't have any notifications</div>
      )}
    </div>
  );
};

export default notificationsList;
