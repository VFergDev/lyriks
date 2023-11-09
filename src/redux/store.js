import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore';
import { artistDetailsApi } from './services/shazamArtistCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [artistDetailsApi.reducerPath]: artistDetailsApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware, artistDetailsApi.middleware),
});
