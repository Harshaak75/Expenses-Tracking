// import {configureStore} from "@reduxjs/toolkit"
// import strictLoginUsers from "./Slice"

// export const Store = configureStore({
//     reducer:{strictLoginUsers},
// })

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import strictLoginUsersReducer from "./Slice";

const persistConfig = {
  key: "root",
  storage,
//   whitelist: ["strictLoginUsers"],
};

const persistedReducer = persistReducer(persistConfig, strictLoginUsersReducer);

const Store = configureStore({
  reducer: {
    strictLoginUsers: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the serializable check
    }),
});

const persistor = persistStore(Store);

export { Store, persistor };
