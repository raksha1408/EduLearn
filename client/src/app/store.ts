import { configureStore } from "@reduxjs/toolkit";
import {authApi} from '../Features/api/authApi'
import authSlice from "../Features/auth/authSlice";



const store = configureStore({
    reducer:{
      [authApi.reducerPath]: authApi.reducer,
      auth:authSlice
    },
  middleware :(getDefaultMiddleware)=> getDefaultMiddleware().concat(authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store