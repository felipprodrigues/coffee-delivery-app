import { combineReducers } from "redux";

import CartReducer from "./cart/reducer";

const rootReducer = combineReducers({
  CartReducer,
});

export default rootReducer;
