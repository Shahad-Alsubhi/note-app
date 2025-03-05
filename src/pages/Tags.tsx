import { useSelector } from "react-redux";
import { Note } from "../types";
import Tag from "../components/Tag";

const Tags = () => {
  const notes = useSelector((state) => state.notes) as Note[];
  const tags = notes.reduce((tags, note) => {
    note.tags.forEach((tag) => {
      if (!tags.includes(tag)) tags.push(tag);
      else return null;
    });
    return tags;
  }, new Array<string>());
  
  return (
    <div className="flex flex-col gap-1">
      {tags.map((tag,index) => (
        <>
          <hr
            key={index}
            className="bg-neutral-200 h-[1px] mb-0.5 dark:bg-neutral-800 lg:hidden"
          />
          <Tag title={tag} key={tag} />
        </>
      ))}
    </div>
  );
};

export default Tags;
