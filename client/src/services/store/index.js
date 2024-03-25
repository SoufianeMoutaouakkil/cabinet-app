import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import usersReducer from "./slices/usersSlice";
import authReducer from "./slices/authSlice";
import patientsReducer from "./slices/patientsSlice";
import consultationsReducer from "./slices/consultationsSlice";

export default configureStore({
  reducer: combineReducers({
    auth: authReducer,
    users: usersReducer,
    patients: patientsReducer,
    consultations: consultationsReducer,
  }),
});
