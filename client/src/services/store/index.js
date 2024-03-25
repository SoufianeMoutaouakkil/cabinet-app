import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import usersReducer from "./slices/usersSlice";
import authReducer from "./slices/authSlice";
import patientsReducer from "./slices/patientsSlice";

export default configureStore({
  reducer: combineReducers({
    auth: authReducer,
    users: usersReducer,
    patients: patientsReducer,
  }),
});
