import { useParams } from "react-router";
import { ClockIcon, TagIcon } from "../icons";
import { INote } from "../types";
import { useSelector } from "react-redux";
import NoteAction from "../components/NoteAction";
import { useTranslation } from "react-i18next";

const Note = ({ note: PropNote }: { note?: INote }) => {
  const notes = useSelector((state:{notes:INote[]}) => state.notes) as INote[];
  const { id } = useParams();
  const note = PropNote || notes.find((n) => n.id === id);
  const { t } = useTranslation("global");


  if (!note) return null;
  return (
    <div className="lg:grid grid-cols-[1.5fr_0.5fr] max-lg:flex max-lg:flex-col-reverse  h-full">
      <div className="px-6 py-5 max-md:px-4 max-md:py-6 h-full overflow-y-scroll border-s-0 max-lg:border-e-0 flex flex-col gap-4 max-md:gap-3 border-[1px] border-y-0 border-neutral-200 dark:border-neutral-800">
        <h1 className="text-2xl font-bold">{note.title}</h1>
        <section id="metadata">
          <div className="grid grid-cols-[115px_1fr] gridRows-2 gap-4 max-md:gap-2">
            <h5 className="text-neutral-700 dark:text-neutral-300">
              <TagIcon /> {t("tags")}
            </h5>
            <h5>{note.tags.join(", ")}</h5>
            <h5 className="text-neutral-700 dark:text-neutral-300">
              <ClockIcon /> {t("date")}
            </h5>
            <h5 className="text-neutral-700 dark:text-neutral-300">
              {note.date}
            </h5>
          </div>
        </section>
        <hr className="text-neutral-200 h-[1px] mb-0.5 dark:text-neutral-800" />
        <p className="text-sm dark:text-neutral-100 text-neutral-800">
          {note.content}
        </p>
      </div>
      <NoteAction archivedNote={note.archived} id={note.id} />
    </div>
  );
};

export default Note;
