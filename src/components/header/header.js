import React, { useState } from "react";
import "./header.scss";
import HeaderList from "../headerLinks/headerLinks";
import BurgerButton from "../burgerButton/burgerButton";
import SearchField from "../searchField/searchField";
import Notifications from "../notifications/notifications";
import AddToDo from "../addToDo/addToDo";
import ViewCalendar from "../viewCalendar/viewCalendar";

const header = (props) => {
  return (
    <header>
      <div className="left-controls">
        <BurgerButton {...props}></BurgerButton>
        <i className="fas fa-home homeIcon"></i>
        <SearchField></SearchField>
      </div>
      <div className="right-controls">
        <AddToDo></AddToDo>
        <Notifications></Notifications>
        <ViewCalendar></ViewCalendar>
      </div>
    </header>
  );
};

export default header;
