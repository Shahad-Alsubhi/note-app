import { TagIcon } from "../icons";
import useNoteForm from "../hooks/useNoteForm";
import { useTranslation } from "react-i18next";

const NewNote = () => {
  const { handleChange } = useNoteForm();
  const { t } = useTranslation("global");

  return (
    <div className="px-6 py-5 max-md:px-4 max-md:py-6 h-full overflow-scroll flex flex-col gap-4 max-md:gap-3">
      <input
        type="text"
        id="title"
        onChange={(e) => handleChange(e)}
        className="text-2xl font-bold placeholder-inherit focus:outline-none"
        placeholder={t("new_note.title_placeholder")}
      />
      <section id="metadata">
        <div className="grid grid-cols-[115px_1fr] gridRows-2 gap-4 max-md:gap-2">
          <label
            htmlFor="tags"
            className="text-neutral-700 dark:text-neutral-300"
          >
            <TagIcon /> {t("tags")}
          </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="tags"
            id="tags"
            className="placeholder-neutral-400 focus:outline-none"
            placeholder={t("new_note.tags_placeholder")}
          />
        </div>
      </section>
      <hr className="bg-neutral-200 h-[1px] my-0.5 dark:bg-neutral-800" />
      <textarea
        onChange={(e) => handleChange(e)}
        id="content"
        rows={500}
        className="text-sm dark:text-neutral-100 text-neutral-800 focus:outline-none h-full resize-none"
        placeholder={t("new_note.content_placeholder")}
      />
    </div>
  );
};

export default NewNote;
