const burgerButtonReducer = (state = true, action) => {
  switch (action.type) {
    case "TOGGLE_BURGER_BTN":
      return !state;
    default:
      if (state) return true;
      else return false;
  }
};

export default burgerButtonReducer;
