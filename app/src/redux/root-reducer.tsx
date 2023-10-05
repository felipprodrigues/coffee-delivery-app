import { combineReducers } from "redux";

import CartReducer from "./cart/reducer";
import FormReducer from "./form/reducer";
import OrderReducer from "./order/reducer";

const rootReducer = combineReducers({
  CartReducer,
  FormReducer,
  OrderReducer,
});

export default rootReducer;
