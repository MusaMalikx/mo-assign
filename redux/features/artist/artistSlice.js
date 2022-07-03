import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    setArtist: (state,action) => {
        state.value = action.payload
    }
  },
})

export const { setArtist } = artistSlice.actions

export default artistSlice.reducer