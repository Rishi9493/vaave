import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: 9,
  loading: false,
  data: [],
  error: null,
  userloading: false,
  userData: [],
  userError: null,
};

export const fetchPosts = createAsyncThunk(
  'data/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return res.data;
    } catch (err) {
      const message = err.message || 'Network error';
      return rejectWithValue(message);
    }
  },
);
export const fetchUserById = createAsyncThunk(
  'data/fetchUserById',
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to fetch user');
    }
  },
);
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || action.error?.message || 'Unknown error';
      });

    builder.addCase(fetchUserById.pending, (state, action) => {
      state.userloading = true;
      state.error = null;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.userloading = false;
      state.userData = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.userloading = false;
      state.userError = action.payload || action.error?.message;
    });
  },
});

export const { increment, decrement, incrementByAmount } = dataSlice.actions;
export default dataSlice.reducer;
