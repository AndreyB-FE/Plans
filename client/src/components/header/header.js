import React from "react";
import "./header.scss";
import HeaderList from "../headerLinks/headerLinks";
import BurgerButton from "../burgerButton/burgerButton";
import SearchField from "../searchField/searchField";
import Notifications from "../notificationsButton/notificationsButton";
import AddToDo from "../addToDo/addToDo";
import ViewCalendar from "../viewCalendar/viewCalendar";
import NewToDoField from "../newToDoField/newToDoField";
import NotificationsBar from "../notificationsBar/notificationsBar";

const header = () => {
  return (
    <header>
      <div className="left-controls">
        <BurgerButton></BurgerButton>
        <i className="fas fa-home homeIcon"></i>
        <SearchField></SearchField>
      </div>
      <div className="right-controls">
        <AddToDo></AddToDo>
        <NewToDoField></NewToDoField>
        <Notifications></Notifications>
        <NotificationsBar></NotificationsBar>
        <ViewCalendar></ViewCalendar>
      </div>
    </header>
  );
};

export default header;