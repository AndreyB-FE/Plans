import React from "react";
import { useSelector } from "react-redux";
import NotificationsList from "../notificationsList/notificationsList";
import "./notificationsBar.scss";

const notficationsBar = () => {
  const buttonToggle = useSelector((state) => state.openNotificationsReducer);
  return (
    <div className={`notificationsBar ${buttonToggle ? null : "hide"}`}>
      <NotificationsList></NotificationsList>
    </div>
  );
};

export default notficationsBar;
