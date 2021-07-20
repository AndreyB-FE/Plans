import React from "react";
import { openHeaderControls } from "../../actions";
import { useDispatch } from "react-redux";
import "./openControls.scss";

const openControls = () => {
  const dispatch = useDispatch();

  return (
    <div className="openControls">
      <i
        className="fas fa-ellipsis-v controlsIcon"
        onClick={() => {
          dispatch(openHeaderControls());
        }}
      ></i>
    </div>
  );
};

export default openControls;
