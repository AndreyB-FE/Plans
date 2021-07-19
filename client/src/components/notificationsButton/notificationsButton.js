import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotificationsBtn } from "../../actions";
import "./notificationsButton.scss";

const notificationsButton = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.setNumNotificationsReducer
  );
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
