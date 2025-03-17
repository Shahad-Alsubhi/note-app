import { INote } from "./types";

export const handleFilterNotes = (
  notes: INote[],
  searchParam: URLSearchParams
) => {
  const search = searchParam.get("search");
  const tag = searchParam.get("tag");
  const archived = searchParam.get("archived");

  if (search)
    return notes.filter(
      (note) =>
        note.title.match(search) ||
        note.content.match(search) ||
        note.tags.join("").match(search)
    );
  if (tag) return notes.filter((note) => note.tags.includes(tag));

  return notes.filter((note) => note.archived === !!archived);
};

export const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};
