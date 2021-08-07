import { combineReducers, createStore } from "redux";
import { appReducer } from "./App/appReducer";
import { authReducer } from "./Auth/authReducer";

const reducer = combineReducers({
  auth: authReducer,
  app : appReducer
});
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
