import { useDispatch } from "react-redux";
import { ArchiveIcon, DeleteIcon, RestoreIcon } from "../icons";
import { actions } from "../store";
import BackBtn from "./BackBtn";
import { useTranslation } from "react-i18next";

const NoteAction = ({
  archivedNote,
  id,
}: {
  archivedNote: boolean;
  id: string;
}) => {
  const dispatch = useDispatch();
    const { t } = useTranslation("global");
  
  return (
    <div className="flex justify-between lg:pt-4 items-center max-lg:border-b border-neutral-200 dark:border-neutral-800 max-lg:px-4 max-lg:pt-0 lg:flex-col max-lg:**:text-neutral-600 max-lg:dark:**:text-neutral-300">
      <BackBtn />
      <div className=" flex gap-4 lg:flex-col items-center *:text-sm">
        <button
          onClick={() => dispatch(actions.DeleteNote({ id }))}
          className="py-2.5 pe-3 flex gap-2 items-center w-full lg:border rounded-lg border-neutral-300 lg:px-4 dark:border-neutral-600 font-medium"
        >
          <DeleteIcon />
          <span className="max-lg:sr-only">{t("delete")}</span>
        </button>
        <button
          onClick={() =>
            archivedNote
              ? dispatch(actions.RestoreNote({ id }))
              : dispatch(actions.ArchiveNote({ id }))
          }
          className="py-2.5 pe-3 flex gap-2 items-center w-full lg:border rounded-lg border-neutral-300 lg:px-4 dark:border-neutral-600 font-medium"
        >
          {archivedNote ? <RestoreIcon /> : <ArchiveIcon />}
          <span className="max-lg:sr-only">
            {archivedNote ? t("restore") : t("archive")}
          </span>
        </button>
      </div>
    </div>
  );
};

export default NoteAction;
