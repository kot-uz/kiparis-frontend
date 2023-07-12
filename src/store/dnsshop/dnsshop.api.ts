import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../models/products.model';

export const dnsshopApi = createApi({
  reducerPath: 'dnsshop/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND_URL}/products`
  }),
  endpoints:build=>({
    getAllProducts: build.query<IProduct[], null>({
      query: ()=>({
        url: ''
      })
    })
  })
})