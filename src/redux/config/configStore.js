import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import comments from "../modules/cardModules";
import problems from "../modules/mainModules";
import users from "../modules/Modules";

const store = configureStore({
  reducer: {
    users: users.reducer,
    comments: comments.reducer,
    problems: problems.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  })
});

export default store;
