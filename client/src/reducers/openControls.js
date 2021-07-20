const openControlsReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_HEADER_CONTROLS":
      return !state;
    default:
      return state;
  }
};

export default openControlsReducer;
