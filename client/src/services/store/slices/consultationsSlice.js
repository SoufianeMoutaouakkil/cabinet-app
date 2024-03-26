import { createSlice } from "@reduxjs/toolkit";
import { addReducerApiCases } from "../../shared/reducerManager";
import {
    generateApiActions,
    generateExportedActions,
} from "../../shared/actionsManager";

const initialState = {};

const consultationsApiActions = generateApiActions("consultations");

const consultationsSlice = createSlice({
    name: "consultations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        addReducerApiCases(builder, consultationsApiActions);
    },
});

export const {
    consultationsGetAll,
    consultationsGetById,
    consultationsCreate,
    consultationsUpdate,
    consultationsRemove,
    consultationsSearch,
} = generateExportedActions("consultations", consultationsApiActions);

export default consultationsSlice.reducer;
