import { configureStore } from "@reduxjs/toolkit";
import { dnsshopApi } from "./dnsshop/dnsshop.api";

export const store = configureStore({
  reducer:{
    [dnsshopApi.reducerPath]: dnsshopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }).concat(dnsshopApi.middleware),
});

export const {useGetAllProductsQuery} = dnsshopApi;