import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import usersReducer from "./slices/usersSlice";
import authReducer from "./slices/authSlice";

export default configureStore({
  reducer: combineReducers({
    auth: authReducer,
    users: usersReducer,
  }),
});
