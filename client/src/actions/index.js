export const toggleBurgerBtn = () => {
  return {
    type: "TOGGLE_BURGER_BTN",
  };
};

export const togglePlusBtn = () => {
  return {
    type: "TOGGLE_PLUS_BTN",
  };
};

export const toggleCalendarBtn = () => {
  return {
    type: "TOGGLE_CALENDAR_BTN",
  };
};

export const toggleNotificationsBtn = () => {
  return {
    type: "TOGGLE_NOTIFICATIONS_BTN",
  };
};

export const setNumNotifications = (num) => {
  return {
    type: "SET_NUM_NOTIFICATIONS",
    payload: num,
  };
};
