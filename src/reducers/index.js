import burgerButtonReducer from "./burgerToggle";

import { combineReducers } from "redux";

const setAllReducers = combineReducers({ burgerButtonReducer });

export default setAllReducers;
