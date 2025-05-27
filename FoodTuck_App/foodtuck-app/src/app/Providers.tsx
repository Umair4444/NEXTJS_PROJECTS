"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "@/app/Redux-toolkit/store";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default AppProvider;
