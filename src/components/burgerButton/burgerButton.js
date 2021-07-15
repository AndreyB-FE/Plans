import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleButton } from "../../actions";
import "./burgerButton.scss";

const burgerButton = () => {
  const buttonToggle = useSelector((state) => state.burgerButtonReducer);
  const dispatch = useDispatch();
  return (
    <div
      id="burgerButton"
      className={buttonToggle ? "menu cross" : "menu"}
      onClick={() => {
        dispatch(toggleButton());
      }}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default burgerButton;
