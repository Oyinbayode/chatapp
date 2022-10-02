import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "./slices/userSlice";

import { firestoreDataApi } from "./slices/firestoreDataSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const reducers = combineReducers({
  user: userReducer,
  [firestoreDataApi.reducerPath]: firestoreDataApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [firestoreDataApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [firestoreDataApi.middleware, thunk],
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
