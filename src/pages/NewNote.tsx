import { useCallback, useEffect, useState } from "react";
import { TagIcon } from "../icons";
import { debounce, throttle } from "lodash";
import { useDispatch } from "react-redux";
import { actions } from "../store";

const NewNote = () => {
  const dispatch = useDispatch();
  const id=Date.now().toString()
  const [formData, setFormData] = useState({
    id: id,
    archived: false,
    title: "",
    content: "",
    tags: "",
  });

  // const throttled = useCallback(
  //   throttle(() => {
  //     console.log("th");
  //     dispatch(
  //       actions.AddNote({
  //         note: {
  //           title: formData.title || "untitled",
  //           content: formData.content,
  //           tags: formData.tags.split(",").map((tag) => tag.trim()),
  //           date: Date.now(),
  //         },
  //       })
  //     );
  //   }, 1000),
  //   [dispatch] // ✅ Prevents recreation of the function
  // );
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("th");
      dispatch(
        actions.AddNote({
          note: {
            title: formData.title || "untitled",
            content: formData.content,
            tags: formData.tags.split(",").map((tag) => tag.trim()),
            date: Date.now().toString(),
            id:formData.id,archived:formData.archived
          },
        })
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [formData]);

  const debouncedSearch = useCallback(
    debounce(
      (
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
      ) => {
        console.log("de");

        setFormData({ ...formData, [e.target.id]: e.target.value });
      },
      500
    ),
    []
  );

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log("ki");

    debouncedSearch(e);
  };
  return (
    <div className="px-6 py-5 max-md:px-4 max-md:py-6 flex flex-col gap-4 max-md:gap-3">
      <input
        type="text"
        id="title"
        onChange={(e) => handleChange(e)}
        className="text-2xl font-bold placeholder-inherit focus:outline-none"
        placeholder="Enter a title…"
      />
      <section id="metadata">
        <div className="grid grid-cols-[115px_1fr] gridRows-2 gap-4 max-md:gap-2">
          <label
            htmlFor="tags"
            className="text-neutral-700 dark:text-neutral-300"
          >
            <TagIcon /> Tags
          </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="tags"
            id="tags"
            className="placeholder-neutral-400 focus:outline-none"
            placeholder="Add tags separated by commas (e.g. Work, Planning)"
          />
        </div>
      </section>
      <hr className="bg-neutral-200 h-[1px] my-0.5 dark:bg-neutral-800" />
      <textarea
        onChange={(e) => handleChange(e)}
        id="content"
        className="text-sm dark:text-neutral-100 text-neutral-800 focus:outline-none h-auto resize-none overflow-hidden"
        placeholder="Start typing your note here…"
      />
    </div>
  );
};

export default NewNote;
