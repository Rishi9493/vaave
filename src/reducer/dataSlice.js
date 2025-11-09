import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  data: [],
  filtered: [],
  error: null,
  userloading: false,
  userData: {},
  userError: null,
  eachpostloading: false,
  eachpost: {},
  eachposterror: null,
  eachcommentloading: false,
  eachcomment: [],
  eachcommenterror: null,
};

const getErrorMessage = err =>
  err?.response?.data?.message || err?.message || 'Network error';

export const fetchPosts = createAsyncThunk(
  'data/fetchPosts',
  async (_, { rejectWithValue, signal }) => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          signal,
        },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(getErrorMessage(err));
    }
  },
);

export const fetchUserById = createAsyncThunk(
  'data/fetchUserById',
  async (userId, { rejectWithValue, signal }) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { signal },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(getErrorMessage(err));
    }
  },
);

export const fetchEachPost = createAsyncThunk(
  'data/fetchEachPost',
  async (postId, { rejectWithValue, signal }) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        { signal },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(getErrorMessage(err));
    }
  },
);

export const fetchEachComment = createAsyncThunk(
  'data/fetchEachComment',
  async (postId, { rejectWithValue, signal }) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        { signal },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(getErrorMessage(err));
    }
  },
);
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    searchQuery: (state, action) => {
      const q = (action.payload ?? '').toString().trim().toLowerCase();
      if (!q) {
        state.filtered = state.data;
        return;
      }
      state.filtered = state.data.filter(ele => {
        const userIdStr = ele.userId?.toString() ?? '';
        const titleStr = (ele.title ?? '').toLowerCase();
        return userIdStr.includes(q) || titleStr.includes(q);
      });
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
        state.filtered = action.payload;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || action.error?.message || 'Unknown error';
      });

    builder.addCase(fetchUserById.pending, (state, action) => {
      state.userloading = true;
      state.userError = null;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.userloading = false;
      state.userData = action.payload;
      state.userError = null;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.userloading = false;
      state.userError = action.payload || action.error?.message;
    });

    builder
      .addCase(fetchEachPost.pending, state => {
        state.eachpostloading = true;
        state.eachposterror = null;
      })
      .addCase(fetchEachPost.fulfilled, (state, action) => {
        state.eachpostloading = false;
        state.eachpost = action.payload;
        state.eachposterror = null;
      })
      .addCase(fetchEachPost.rejected, (state, action) => {
        state.eachpostloading = false;
        state.eachposterror =
          action.payload || action.error?.message || 'Unknown error';
      });

    builder
      .addCase(fetchEachComment.pending, state => {
        state.eachcommentloading = true;
        state.eachcommenterror = null;
      })
      .addCase(fetchEachComment.fulfilled, (state, action) => {
        state.eachcommentloading = false;
        state.eachcomment = action.payload;
        state.eachcommenterror = null;
      })
      .addCase(fetchEachComment.rejected, (state, action) => {
        state.eachcommentloading = false;
        state.eachcommenterror =
          action.payload || action.error?.message || 'Unknown error';
      });
  },
});
export const { searchQuery } = dataSlice.actions;
export default dataSlice.reducer;
