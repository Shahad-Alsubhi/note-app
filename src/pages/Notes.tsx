import { useSelector } from "react-redux";
import { INote } from "../types";
import NoteCard from "../components/NoteCard";
import { useSearchParams } from "react-router";
import Note from "./Note";
import { useEffect, useMemo, useState } from "react";
import { handleFilterNotes } from "../utils";
import AddNoteBtn from "../components/AddNoteBtn";
import NewNote from "./NewNote";
import { useTranslation } from "react-i18next";
import { useTitleUtils } from "../hooks/useTitleUtils";

const Notes = () => {
  const notes = useSelector(
    (state: { notes: INote[] }) => state.notes
  ) as INote[];

  const { t } = useTranslation("global");
  const { getEmptyStateText } = useTitleUtils();

  const [searchParam] = useSearchParams();
  const filteredNotes = useMemo(
    () => handleFilterNotes(notes, searchParam),
    [notes, searchParam]
  );
  const [selectedNote, setSelectedNote] = useState(filteredNotes[0]);
  useEffect(() => {
    setSelectedNote(filteredNotes[0]);
  }, [filteredNotes]);
  const [newNote, setNewNote] = useState(0);
  return (
    <div className=" lg:grid h-full grid-cols-[0.65fr_2fr]">
      <div
        className={`h-full overflow-y-scroll  overflow-x-hidden px-4 pb-6 lg:border-e border-neutral-200 dark:border-neutral-800 *:first:max-lg:hidden ${
          searchParam.get("archived") && "*:first:hidden"
        }`}
      >
        <AddNoteBtn
          text={t("create_note") + " +"}
          onClick={() => {
            setNewNote(Date.now());
          }}
        />
        {filteredNotes.length === 0 ? (
          <p className=" border rounded-lg dark:border-neutral-700 dark:bg-[#232530] p-2 text-sm mt-5 bg-neutral-100 border-neutral-200">
            {getEmptyStateText(searchParam)}
          </p>
        ) : (
          filteredNotes.map((note) => (
            <NoteCard
              note={note}
              key={note.id}
              setSelectedNote={() => {
                setNewNote(0);
                setSelectedNote(note);
              }}
            />
          ))
        )}
      </div>
      <div className="max-lg:hidden overflow-hidden ">
        {newNote ? <NewNote key={newNote} /> : <Note note={selectedNote} />}
      </div>
    </div>
  );
};

export default Notes;
