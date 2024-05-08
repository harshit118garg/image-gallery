import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, SliceInitialState } from "../definations/types";
// import { LOCAL_URL } from "../definations/constants";
import { PROD_BASE_URL } from "../definations/constants";

export const initialState: SliceInitialState = {
  imagesPerPage: 10,
  currPageNum: 1,
  searchQuery: ''
}

export const manageImageGalleryDataSlice = createSlice({
  name: 'imageGalleryData',
  initialState,
  reducers: {
    setImagesPerPage: (state, action: PayloadAction<{ imagesPerPage: number }>) => {
      state.imagesPerPage = action.payload.imagesPerPage
    },
    setCurrentPage: (state, action: PayloadAction<{ currPageNum: number }>) => {
      state.currPageNum = action.payload.currPageNum
    },
    setSearchQuery: (state, action: PayloadAction<{ searchQuery: string }>) => {
      state.searchQuery = action.payload.searchQuery
    }
  }
})


/* will use this in prod */

const baseQuery = fetchBaseQuery({
  baseUrl: PROD_BASE_URL, prepareHeaders(headers) {
    headers.set('Authorization', import.meta.env.VITE_PEXELS_API_KEY as string)
  }
});

/* for local */

// const baseQuery = fetchBaseQuery({
//   baseUrl: LOCAL_URL
// });

export const imageAPISlice = createApi({
  reducerPath: 'imageGalleryApi',
  baseQuery,
  tagTypes: ['images'],
  endpoints: (builder) => ({
    getImagesData: builder.query<ApiResponse, { currPageNum: number, imagesPerPage: number }>({
      // query: ({currPageNum, imagesPerPage}) => `/images/?page=${currPageNum}&per_page=${imagesPerPage}`,
      query: ({ currPageNum, imagesPerPage }) => {
        return `/curated?page=${currPageNum}&per_page=${imagesPerPage}`
      }
    }),
    getSearchImageData: builder.query<ApiResponse, { searchQuery: string, currPageNum: number, imagesPerPage: number }>({
      query: ({ searchQuery, currPageNum, imagesPerPage }) => `/search?query=${searchQuery}&page=${currPageNum}&per_page=${imagesPerPage}`,
    })
  }),
});

export const { setImagesPerPage, setCurrentPage, setSearchQuery } = manageImageGalleryDataSlice.actions;

export default manageImageGalleryDataSlice.reducer;

export const { useGetImagesDataQuery, useGetSearchImageDataQuery } = imageAPISlice;
