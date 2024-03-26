import { createSlice } from "@reduxjs/toolkit";
import { addReducerApiCases } from "../../shared/reducerManager";
import {
    generateApiActions,
    generateExportedActions,
} from "../../shared/actionsManager";

const initialState = {};

const patientsApiActions = generateApiActions("patients");

const patientsSlice = createSlice({
    name: "patients",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        addReducerApiCases(builder, patientsApiActions);
    },
});

export const {
    patientsGetAll,
    patientsGetById,
    patientsCreate,
    patientsUpdate,
    patientsRemove,
    patientsSearch,
} = generateExportedActions("patients", patientsApiActions);

export default patientsSlice.reducer;
