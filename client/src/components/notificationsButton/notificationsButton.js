import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleNotificationsBtn } from "../../actions";
import "./notificationsButton.scss";

const notificationsButton = () => {
  const dispatch = useDispatch();
  const [notifications, setNotification] = useState(0);
  return (
    <div
      className="notifications"
      onClick={() => {
        dispatch(toggleNotificationsBtn());
      }}
    >
      <div
        className={`indicator ${notifications ? "indicator visible" : null}`}
      ></div>
      <i className="far fa-bell bellIcon"></i>
    </div>
  );
};

export default notificationsButton;
