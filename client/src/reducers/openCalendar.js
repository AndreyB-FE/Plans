const openCalendarReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CALENDAR_BTN":
      return !state;
    default:
      return false;
  }
};

export default openCalendarReducer;
