import React from "react";
import { useDispatch } from "react-redux";
import { togglePlusBtn } from "../../actions";
import "./addToDo.scss";

const addToDo = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="addToDo"
      onClick={() => {
        dispatch(togglePlusBtn());
      }}
    >
      <i className="fas fa-plus plusIcon"></i>
    </div>
  );
};

export default addToDo;
