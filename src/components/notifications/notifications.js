import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleNotificationsBtn } from "../../actions";
import "./notifications.scss";

const notofications = () => {
  const dispatch = useDispatch();
  const [notifications, setNotification] = useState(0);
  return (
    <div
      className="notifications"
      onClick={() => {
        dispatch(toggleNotificationsBtn());
      }}
    >
      <div className={notifications ? "indicator visible" : "indicator"}></div>
      <i className="far fa-bell bellIcon"></i>
    </div>
  );
};

export default notofications;
