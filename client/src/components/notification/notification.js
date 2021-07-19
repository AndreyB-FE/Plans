import React from "react";
import "./notification.scss";

const notification = (props) => {
  const { title, body } = props;
  return (
    <div className="notification">
      <div className="title">{title}</div>
      <div className="body">{body}</div>
      <i
        className="fas fa-trash-alt remove"
        onClick={() => props.onDelete(props.id)}
      ></i>
    </div>
  );
};

export default notification;
