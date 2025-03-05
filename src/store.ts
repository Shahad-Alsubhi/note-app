import { configureStore, createSlice } from "@reduxjs/toolkit";

const NoteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {},
});

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {},
});

export const noteAction = NoteSlice.actions;
export const ThemeAction = themeSlice.actions;
const store = configureStore({
  reducer: { Notes: NoteSlice.reducer, Theme: themeSlice.reducer },
});
export default store;
