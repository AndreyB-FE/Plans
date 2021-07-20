const openNotificationsReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_NOTIFICATIONS_BTN":
      return !state;
    default:
      return state;
  }
};

export default openNotificationsReducer;
