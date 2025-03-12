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

export const getTitle = (searchParam: URLSearchParams, pathname: string) => {
  const search = searchParam.get("search");
  const tag = searchParam.get("tag");
  const archived = searchParam.get("archived");
   
  if(search==="null") return "Search"
  if (search) return `Showing results for: ${search}`;
  if (tag) return `Notes Tagged: ${tag}`;
  if (archived) return "Archived Notes";

  return pathname.includes("settings") ? "Settings" :pathname.includes("tags")?"Tags": "All Notes";
};

export const EmptyStateText = (searchParam: URLSearchParams) => {
  const search = searchParam.get("search");
  const archived = searchParam.get("archived");

  if (search) return "No notes match your search.";
  if (archived) return "No notes have been archived yet.";
  return "You don’t have any notes yet. Start a new note to capture your thoughts and ideas.";
};
