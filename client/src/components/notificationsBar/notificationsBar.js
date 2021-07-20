import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotificationsBtn } from "../../actions";
import useOutsideClick from "../../hooks/useOutsideClick";
import NotificationsList from "../notificationsList/notificationsList";
import "./notificationsBar.scss";

const notficationsBar = () => {
  // const ref = useRef();
  // const dispatch = useDispatch();
  // useOutsideClick(ref, () => {
  //   dispatch(toggleNotificationsBtn());
  // });
  const buttonToggle = useSelector((state) => state.openNotificationsReducer);
  return (
    <div className={`notificationsBar ${buttonToggle ? null : "hide"}`}>
      <NotificationsList></NotificationsList>
    </div>
  );
};

export default notficationsBar;
