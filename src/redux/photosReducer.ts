import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { photosApi } from 'src/api/api';

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type InitialStatePhotosType = {
  photos: Photo[];
};

const initialState: InitialStatePhotosType = {
  photos: [],
};

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
  const response = await photosApi.getPhotos();
  return response;
});

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    photosAdded(state, action) {
      state.photos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      const photos = action.payload;
      state.photos = photos;
    });
  },
});

export const { photosAdded } = photosSlice.actions;

export default photosSlice.reducer;
