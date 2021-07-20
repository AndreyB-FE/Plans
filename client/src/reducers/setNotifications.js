const setNotificationsReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_NOTIFICATIONS":
      return (state = action.payload);
    case "DELETE_NOTIFICATION":
      if (state > 0) return state - 1;
      return console.error("Invflid Notifications State");
    case "DELETE_ALL_NOTIFICATIONS":
      return (state = 0);
    default:
      return state;
  }
};
export default setNotificationsReducer;
