import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleBurgerBtn } from "../../actions";
import "./burgerButton.scss";

const burgerButton = () => {
  const buttonClick = useSelector((state) => state.burgerButtonReducer);
  const dispatch = useDispatch();
  return (
    <div
      id="burgerButton"
      className={buttonClick ? "menu cross" : "menu"}
      onClick={() => {
        dispatch(toggleBurgerBtn());
      }}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default burgerButton;
