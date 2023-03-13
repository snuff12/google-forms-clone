import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./questionsSlice";

const store = configureStore({
  reducer: {
    questions: questionsSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>
export default store;
