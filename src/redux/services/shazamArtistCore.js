import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const artistDetailsApi = createApi({
  reducerPath: 'artistDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v2', // Different base URL
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '1d9a8badf5msh7e66543a67bc4a2p19d8adjsn0972c59dfd81',
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
  }),
});

export const {
  useGetArtistDetailsQuery,
} = artistDetailsApi;
