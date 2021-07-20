import React from "react";
import "./headerControls.scss";
import { useSelector } from "react-redux";
import Notifications from "../notificationsButton/notificationsButton";
import AddToDo from "../addToDo/addToDo";
import ViewCalendar from "../viewCalendar/viewCalendar";
import NewToDoField from "../newToDoField/newToDoField";
import NotificationsBar from "../notificationsBar/notificationsBar";

const headerControls = () => {
  const isOpen = useSelector((state) => state.openControlsReducer);
  return (
    <div className={`controls ${isOpen ? "hideControls" : null}`}>
      <AddToDo></AddToDo>
      <NewToDoField></NewToDoField>
      <Notifications></Notifications>
      <NotificationsBar></NotificationsBar>
      <ViewCalendar></ViewCalendar>
    </div>
  );
};

export default headerControls;
