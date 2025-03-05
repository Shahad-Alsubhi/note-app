import { TagIcon } from "../icons";

const NewNote = () => {
  return (
    <div className="px-6 py-5 max-md:px-4 max-md:py-6 flex flex-col gap-4 max-md:gap-3">
      <input type="text" className="text-2xl font-bold placeholder-inherit focus:outline-none" placeholder="Enter a title…"/>
      <section id="metadata">
        <div className="grid grid-cols-[115px_1fr] gridRows-2 gap-4 max-md:gap-2">
          <label htmlFor="tags"  className="text-neutral-700 dark:text-neutral-300">
            <TagIcon /> Tags
          </label>
          <input
            type="text"
            name="tags" id="tags"
            className="placeholder-neutral-400 focus:outline-none"
            placeholder="Add tags separated by commas (e.g. Work, Planning)"
          /> 
          
        </div>
      </section>
      <hr className="bg-neutral-200 h-[1px] my-0.5 dark:bg-neutral-800" />
      <textarea className="text-sm dark:text-neutral-100 text-neutral-800 focus:outline-none h-auto resize-none overflow-hidden" placeholder="Start typing your note here…"/>
       
    </div>
  );
};

export default NewNote;
