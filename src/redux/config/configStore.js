import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/cardModules";
import users from "../modules/Modules";

const store = configureStore({
  reducer: {
    users: users.reducer,
    comments: comments.reducer,
  },
});

export default store;
