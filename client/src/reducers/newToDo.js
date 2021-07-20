const newToDoReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_PLUS_BTN":
      return !state;
    default:
      return false;
  }
};

export default newToDoReducer;
