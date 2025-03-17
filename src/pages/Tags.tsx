import { useSelector } from "react-redux";
import { INote } from "../types";
import Tag from "../components/Tag";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const Tags = () => {
  const notes = useSelector(
    (state: { notes: INote[] }) => state.notes
  ) as INote[];

  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    notes.forEach((note) => note.tags.forEach((tag) => tagSet.add(tag)));
    return [...tagSet].sort();
  }, [notes]);
  const { t } = useTranslation("global");


  return (
    <div className="flex flex-col gap-1 *:border-b *:last:border-0 *:first:border-0 *:border-neutral-200 dark:*:border-neutral-800 *:lg:border-0">
      <h1 className="max-lg:hidden mb-8 font-medium ps-4 text-neutral-500 lg:mb-2.5 mt-1">
        {t("tags")}
      </h1>
      {tags.map((tag) => (tag ? <Tag title={tag} key={tag} /> : null))}
    </div>
  );
};

export default Tags;
