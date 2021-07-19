const setNumNotificationsReducer = (state = 0, action) => {
  switch (action) {
    case "SET_NUM_NOTIFICATIONS":
      return (state = action.payload);
    default:
      return state;
  }
};
export default setNumNotificationsReducer;
