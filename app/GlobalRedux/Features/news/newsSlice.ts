'use client';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiParameters, SliceConstants } from '../../constants';
import axios from 'axios';

export interface NewsState {
  news: any;
  loading: boolean;
  value: number;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  value: 0,
}

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

export const getNews = createAsyncThunk(
  SliceConstants.GetNews,
  async function (_,{ rejectWithValue }) {
    try {
      const { data } = await axios.get(`${BASE_URL}?${ApiParameters.ApiKey}=${API_KEY}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getNews.pending, (state) => {
        return { ...state, loading: true };
      });
      builder.addCase(getNews.fulfilled, (state, { payload }) => {
        return {
          ...state,
          loading: false,
          news: payload.response.results,
        };
      });
      builder.addCase(getNews.rejected, (state) => {
        return { ...state, loading: false };
      });
    },
})

export default newsSlice.reducer;
