import { combineReducers } from "redux";

import CartReducer from "./cart/reducer";
import FormReducer from "./form/reducer";

const rootReducer = combineReducers({
  CartReducer,
  FormReducer,
});

export default rootReducer;
