import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://body-revive-server.vercel.app/api",
  }),
  tagTypes: ["Product"],
  endpoints: () => ({}),
});

export default baseApi;
