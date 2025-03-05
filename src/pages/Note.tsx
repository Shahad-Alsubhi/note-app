import { ClockIcon, TagIcon } from "../icons";
import { Note as INote } from "../types";

const Note = ({ note }: { note: INote }) => {
  return (
    <div className="px-6 py-5 max-md:px-4 max-md:py-6 flex flex-col gap-4 max-md:gap-3">
      <h1 className="text-2xl font-bold">{note.title}</h1>
      <section id="metadata">
        <div className="grid grid-cols-[115px_1fr] gridRows-2 gap-4 max-md:gap-2">
          <h5 className="text-neutral-700 dark:text-neutral-300">
            <TagIcon /> Tags
          </h5>
          <h5 className="">{note.tags.join(", ")}</h5>
          <h5 className="text-neutral-700 dark:text-neutral-300">
            <ClockIcon /> Last edited
          </h5>
          <h5 className="text-neutral-700 dark:text-neutral-300">
            {note.date}
          </h5>
        </div>
      </section>
      <hr className="bg-neutral-200 h-[1px] mb-0.5 dark:bg-neutral-800" />
      <p className="text-sm dark:text-neutral-100 text-neutral-800">
        {note.content}
      </p>
    </div>
  );
};

export default Note;

