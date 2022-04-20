import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
    reducer: {
        store: rootReducer,
      },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
