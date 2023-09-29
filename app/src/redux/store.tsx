import { createStore } from "redux";
import rootReducer from "./root-reducer.jsx";

const store = createStore(rootReducer);

export default store;
