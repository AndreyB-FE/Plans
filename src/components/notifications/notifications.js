import React, { useState } from "react";
import "./notifications.scss";

const notofications = () => {
  const [notifications, setNotification] = useState(0);

  return (
    <div className="notifications">
      <div className={notifications ? "indicator visible" : "indicator"}></div>
      <i className="far fa-bell bellIcon"></i>
    </div>
  );
};

export default notofications;
