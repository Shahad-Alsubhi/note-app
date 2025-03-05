import { Note } from "../types";

const NoteCard = ({ note }: { note: Note }) => {
  return (
    <div className="p-2 rounded-[6px] hover:bg-neutral-100 dark:hover:bg-neutral-600">
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
