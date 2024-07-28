import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./Slices/NavSlices";
import restaurantSlice from "./Slices/Restaurant";

export const store = configureStore({
  reducer: { navbar: navSlice, restaurant: restaurantSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
