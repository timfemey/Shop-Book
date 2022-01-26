import { createStore } from "@reduxjs/toolkit";
import cartSlice from "../features/counter/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

export const store = createStore(persistedReducer);
export let persistor = persistStore(store);
