import { useNavigate } from "react-router";
import { INote } from "../types";
import { useMediaQuery } from "react-responsive";

const NoteCard = ({
  note,
  setSelectedNote,
}: {
  note: INote;
  setSelectedNote: () => void;
}) => {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <div
      className="p-2 hover:rounded-[6px] hover:bg-neutral-100 hover:border-t-neutral-100 dark:hover:border-t-[#232530] dark:hover:bg-[#232530] border-b border-b-neutral-200 dark:border-b-neutral-800"
      onClick={() =>
        isLargeScreen ? setSelectedNote() : navigate(`/notes/${note.id}`)
      }
    >
      <h1 className="text-base font-semibold mb-2">{note.title}</h1>
      <section className="flex flex-wrap gap-1">
        {note.tags.map((tag) => (
          <span
            key={tag}
            className="py-0.5 px-1.5 rounded-[4px] text-xs dark:group-hover:bg-[#525866] bg-neutral-200 dark:bg-[#2B303B]"
          >
            {tag}
          </span>
        ))}
      </section>
      <h2 className="text-xs font-normal mt-3 text-neutral-700 dark:text-neutral-300 ">
        {note.date}
      </h2>
    </div>
  );
};

export default NoteCard;
