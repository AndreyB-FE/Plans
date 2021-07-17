import React, { useState, useEffect } from "react";
import Notification from "../notification/notification";
import "./notificationsList.scss";

const notificationsList = () => {
  const getNotifications = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  const [response, setResponse] = useState("nothing yet");

  useEffect(() => {
    getNotifications().then((res) => {
      const data = res;
      setResponse(data.express.body); //shit code but still..
    });
  }, []);

  return <div className="notificationsList">{response}</div>;
};

export default notificationsList;
