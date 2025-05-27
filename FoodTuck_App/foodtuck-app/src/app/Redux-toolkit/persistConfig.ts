import storage from "redux-persist/lib/storage"; // ✅ Use this instead of createWebStorage

// Persist configuration for Redux Persist
const persistConfig = {
  key: "root",
  version: 1,
  storage, // ✅ Uses localStorage without SSR issues
};

export default persistConfig;
