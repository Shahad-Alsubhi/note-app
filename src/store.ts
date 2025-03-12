import { configureStore, createSlice } from "@reduxjs/toolkit";
import { INote } from "./types";

const NoteSlice = createSlice({
  name: "notes",
  initialState: new Array<INote>(),
  reducers: {
    DeleteNote(state, { payload }) {
      return state.filter((note) => note.id !== payload.id);
    },
    ArchiveNote(state, { payload }) {
      state.forEach((note) => {
        if (note.id === payload.id) note.archived = true;
      });
    },
    RestoreNote(state, { payload }) {
      state.forEach((note) => {
        if (note.id === payload.id) note.archived = false;
      });
    },

    AddNote(state, { payload }) {
      const noteToUpdate = state.find((note) => note.id === payload.note.id);
      if (noteToUpdate) {
        return state.map((note) =>
          note.id === payload.note.id ? { ...note, ...payload.note } : note
        );
      }
      return [payload.note, ...state];
    },
  },
});

const ActiveBtnSlice = createSlice({
  name: "activeBtn",
  initialState: "all",
  reducers: {
    SetActiveBtn(state, { payload }) {
      return payload.btn;
    },
  },
});
export const actions = NoteSlice.actions;
export const BtnActions = ActiveBtnSlice.actions;
const store = configureStore({
  reducer: { notes: NoteSlice.reducer, activeBtn: ActiveBtnSlice.reducer },
});
export default store;
