import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/search/searchSlice";
import artistSlice from "../features/artist/artistSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    artist: artistSlice,
  },
});
