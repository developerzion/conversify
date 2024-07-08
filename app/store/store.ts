import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./features/userSlice";
import friendRequestSlice from "./features/friendRequestSlice";

const persistConfig = {
   key: "_root_",
   storage,
   whitelist: ["user"],
   blacklist: ["friendRequest"], // specify reducers to be excluded from persisting
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
   reducer: {
      user: persistedReducer,
      friendRequest: friendRequestSlice,
   },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
