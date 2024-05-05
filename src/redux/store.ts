import { configureStore } from "@reduxjs/toolkit";
import { imageAPISlice, manageImageGalleryDataSlice } from "./slice";

export const store = configureStore({
  reducer: {
    galleryState: manageImageGalleryDataSlice.reducer,
    [imageAPISlice.reducerPath]: imageAPISlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(imageAPISlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
