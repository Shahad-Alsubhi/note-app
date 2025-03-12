import { useSelector } from "react-redux";
import { INote } from "../types";
import Tag from "../components/Tag";
import { useMemo } from "react";

const Tags = () => {
  const notes = useSelector((state:{notes:INote[]}) => state.notes) as INote[];
  const tags = useMemo(
    () =>
      notes.reduce((tags, note) => {
        note.tags.forEach((tag) => {
          if (!tags.includes(tag)) tags.push(tag);
        });
        return tags;
      }, new Array<string>()),
    [notes]
  );

  return (
    <div className="flex flex-col gap-1 *:border-b *:last:border-0 *:first:border-0 *:border-neutral-200 dark:*:border-neutral-800 *:lg:border-0">
      <h1 className="max-lg:hidden mb-8font-medium pl-4 text-neutral-500 lg:mb-2.5 mt-1">
        Tags
      </h1>
      {tags.map((tag) => (
        <Tag title={tag} key={tag} />
      ))}
    </div>
  );
};

export default Tags;
