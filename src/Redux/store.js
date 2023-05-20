import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";
export const store = createStore(
  reducer,
  composeEnhacer(applyMiddleware(thunkMiddleware)) // esta lines se conecta con un server
);
