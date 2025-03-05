import { useSelector } from "react-redux";
import { Note } from "../types";
import NoteCard from "../components/NoteCard";

const Notes = ({ archived = false }: { archived?: boolean }) => {
  const notes = useSelector((state) => state.notes) as Note[];

  return (
    <div className="py-5 pl-8 pr-4">
      {notes.map((note,index) =>
        note.archived === archived ? (
          <>
            <hr key={index} className="bg-neutral-200 h-[1px] mb-0.5 dark:bg-neutral-800" />
            <NoteCard note={note} key={note.title+index} />
          </>
        ) : null
      )}
    </div>
  );
};

export default Notes;
