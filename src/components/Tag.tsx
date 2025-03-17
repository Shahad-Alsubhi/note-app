import { TagIcon } from "../icons";
import useBtnNavigation from "../hooks/useBtnNavigation";

const Tag = ({ title }: { title: string }) => {
  const { activeBtn, handleNavigation } = useBtnNavigation();
  return (
    <div
      className={`flex gap-2 py-2.5 items-center rounded-lg px-4 *:first:shrink-0 ${
        activeBtn === title
          ? "*:first:text-blue-500 bg-neutral-100 dark:bg-[#232530]"
          : ""
      }`}
      onClick={() => handleNavigation(`/notes?tag=${title}`, title)}
    >
      <TagIcon />
      <h1 className="max-w-full overflow-hidden overflow-ellipsis text-nowrap font-medium text-[15px] capitalize">
        {title}
      </h1>
    </div>
  );
};

export default Tag;
