import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";

// si tienes varios archivos aqui los agrupas en 1. Retorna un store.
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
