import { createSlice } from '@reduxjs/toolkit'

export const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    value: null,
    isLoading: false,
  },
  reducers: {
    setPhotos: (state, action) => {
      state.value = action.payload
    },

    setLoader: (state) => {
      state.isLoading = !state.isLoading
    }
  },
})

export const photoReducer = photoSlice.reducer;

export const { setPhotos, setLoader } = photoSlice.actions;