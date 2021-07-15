const burgerButtonReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_BUTTON":
      return !state;
    default:
      return false;
  }
};

export default burgerButtonReducer;
