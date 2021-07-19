import burgerButtonReducer from "./burgerToggle";
import newToDoReducer from "./newToDo";
import openCalendarReducer from "./openCalendar";
import openNotificationsReducer from "./openNotifications";
import setNotificationsReducer from "./setNotifications";

import { combineReducers } from "redux";

const setAllReducers = combineReducers({
  burgerButtonReducer,
  newToDoReducer,
  openCalendarReducer,
  openNotificationsReducer,
  setNotificationsReducer,
});

export default setAllReducers;
