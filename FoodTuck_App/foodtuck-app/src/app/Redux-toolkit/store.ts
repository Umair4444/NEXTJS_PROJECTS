import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import ProductSlice from "./feature/productSlice";
import cartSlice from "./feature/cartSlice";
import blogSlice from "./feature/BlogSlice";
import wishSlice from "./feature/wishSlice";
import { logger } from "redux-logger";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  product: ProductSlice,
  cart: cartSlice,
  blogs: blogSlice,
  wish: wishSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // .concat(logger), // stops uploading data but shows console data
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
