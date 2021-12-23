import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import resultReducer from './slices';

export default configureStore({
    reducer: {
        results: resultReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});