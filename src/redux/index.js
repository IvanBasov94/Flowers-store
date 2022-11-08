import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import flowersReducer from './flowers/reducer';

export const store = configureStore({
   reducer: {
      cart: cartReducer,
      flower: flowersReducer,
   },
});