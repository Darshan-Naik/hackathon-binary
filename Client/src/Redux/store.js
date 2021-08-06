import { combineReducers, createStore } from "redux";
import { authReducer } from "./Auth/authReducer";

const reducer = combineReducers({
  auth: authReducer,
});
const store = createStore(reducer);

export default store;
