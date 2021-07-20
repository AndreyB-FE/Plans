import React from "react";
import { useDispatch } from "react-redux";
import { toggleCalendarBtn } from "../../actions";
import "./viewCalendar.scss";

const viewCalendar = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="viewCalendar"
      onClick={() => {
        dispatch(toggleCalendarBtn());
      }}
    >
      <i className="far fa-calendar-alt calendarIcon"></i>
    </div>
  );
};

export default viewCalendar;
