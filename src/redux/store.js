import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { userSlice } from "./userSlice";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};
const reducer = combineReducers({
    users : userSlice.reducer
})

const persistReducers = persistReducer(persistConfig, reducer);

export default configureStore({
    reducer: persistReducers
})