import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./newToDoField.scss";

const newToDoField = () => {
  const [buttonText, setButtonText] = useState("Today");
  const [optionsMenu, setOptionsMenu] = useState(false);
  const [isImportant, setIsImportant] = useState(false);
  const [reminder, setReminder] = useState(false);
  const buttonToggle = useSelector((state) => state.newToDoReducer);
  const dayOptions = ["Today", "Tomorrow", "This Weekend", "Next week"];

  return (
    <div className={`newToDoField ${buttonToggle ? null : "hide"}`}>
      <div className="text-notification">
        <textarea
          name="newToDo"
          id="newToDo"
          className="newToDo"
          cols="30"
          rows="10"
          placeholder="What should we do next?"
        ></textarea>
        <div className="notifications-flags">
          <i
            onClick={() => setIsImportant(!isImportant)}
            className={`flag important ${
              isImportant ? "fas fa-star active" : "far fa-star"
            }`}
          ></i>
          <i
            onClick={() => setReminder(!reminder)}
            className={`flag reminder ${
              reminder ? "fas fa-bell active" : "far fa-bell-slash"
            }`}
          ></i>
        </div>
      </div>
      <div className="lower-controllers">
        <button id="submit" type="submit">
          Add Task
        </button>
        <div className="selections">
          <button
            className="current-day"
            onClick={() => {
              setOptionsMenu(!optionsMenu);
            }}
          >
            {buttonText}
          </button>
          <ul className={`dropdown-options ${optionsMenu ? null : "hide"}`}>
            {dayOptions.map((option, id) => {
              return (
                <li
                  className="option"
                  key={id}
                  onClick={() => {
                    setOptionsMenu(!optionsMenu);
                    setButtonText(option);
                  }}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default newToDoField;
