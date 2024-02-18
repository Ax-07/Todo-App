import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { figureApi } from '../api/figureApi';

export const store = configureStore({
    reducer: {
        [figureApi.reducerPath]: figureApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(figureApi.middleware),
    });

setupListeners(store.dispatch);
