import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { photosApi } from 'src/api/photosApi';

type ToolkitPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type SagaPhoto = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

type InitialStatePhotosType = {
  toolkitPhotos: ToolkitPhoto[];
  sagaPhotos: SagaPhoto[];
};

const initialState: InitialStatePhotosType = {
  toolkitPhotos: [],
  sagaPhotos: [],
};

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
  const response = await photosApi.getPhotos();
  return response;
});

export const photosRequestedAction = () =>
  ({
    type: 'PHOTOS_REQUESTED',
  } as const);

const photosSlice = createSlice({
  name: 'toolkitPhotos',
  initialState,
  reducers: {
    toolkitPhotosAdded(state, action) {
      state.toolkitPhotos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      const photos = action.payload;
      state.toolkitPhotos = photos;
    });
  },
});

export const photoSagaSlice = createSlice({
  name: 'sagaPhotos',
  initialState,
  reducers: {
    sagaPhotosAdded: (state, action) => {
      state.sagaPhotos = action.payload;
    },
  },
});

export const { toolkitPhotosAdded } = photosSlice.actions;
export const { sagaPhotosAdded } = photoSagaSlice.actions;

export default combineReducers({
  toolkit: photosSlice.reducer,
  saga: photoSagaSlice.reducer,
});
