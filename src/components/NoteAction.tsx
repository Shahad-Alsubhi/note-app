import { useDispatch } from "react-redux";
import { ArchiveIcon, DeleteIcon, RestoreIcon } from "../icons";
import { actions } from "../store";
import BackBtn from "./BackBtn";

const NoteAction = ({
  archivedNote,
  id,
}: {
  archivedNote: boolean;
  id: string;
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between lg:pt-4  items-center max-lg:border-b border-neutral-200 dark:border-neutral-800 max-lg:px-4 max-lg:pt-3 lg:flex-col max-lg:**:text-neutral-600 max-lg:dark:**:text-neutral-300">
      <BackBtn />

      <div className=" flex gap-4 lg:flex-col items-center *:text-sm">
        <button
          onClick={() => dispatch(actions.DeleteNote({ id }))}
          className="py-2.5 pr-3 flex gap-2 items-center w-full lg:border rounded-lg border-neutral-300 lg:px-4 dark:border-neutral-600 font-medium"
        >
          <DeleteIcon />
          <span className="max-lg:hidden">Delete Note</span>
        </button>
        {archivedNote ? (
          <button
            onClick={() => dispatch(actions.RestoreNote({ id }))}
            className="py-2.5 pr-3 flex gap-2 items-center w-full lg:border rounded-lg border-neutral-300 lg:px-4 dark:border-neutral-600 font-medium"
          >
            <RestoreIcon />
            <span className="max-lg:hidden">Restore Note</span>
          </button>
        ) : (
          <button
            onClick={() => dispatch(actions.ArchiveNote({ id }))}
            className="py-2.5 pr-3 flex gap-2 items-center w-full lg:border rounded-lg border-neutral-300 lg:px-4 dark:border-neutral-600 font-medium"
          >
            <ArchiveIcon />
            <span className="max-lg:hidden">Archive Note</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default NoteAction;
