'use client';

import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SliceConstants } from '../../constants';
import { IFilter, INews, INewsProps } from '@/app/types';
import { generateNewsUrl } from '@/app/utils/generateUrl';

export interface NewsState {
  news: INews[];
  loading: boolean;
  value: number;
  filter: IFilter;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  value: 0,
  filter: {
    dates: 'newest',
    onPage: '10',
  },
}

export const getNews = createAsyncThunk(
  SliceConstants.GetNews,
  async function (props: INewsProps,{ rejectWithValue }) {
    try {
      const { data } = await axios.get(generateNewsUrl(props));
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const setFilter = createAsyncThunk(
  SliceConstants.SetFilter,
  async function (data: IFilter, { rejectWithValue }) {
    try {
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
      builder.addCase(setFilter.fulfilled, (state, { payload }) => {
        return {
          ...state,
          loading: false,
          filter: payload
          ,
        };
      });
    },
})

export default newsSlice.reducer;
