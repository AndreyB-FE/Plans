const burgerButtonReducer = (state = true, action) => {
  switch (action.type) {
    case "TOGGLE_BURGER_BTN":
      return !state;
    default:
      return state;
  }
};

export default burgerButtonReducer;
