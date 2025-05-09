import { ReactNode } from "react";

const SettingsOption = ({
  title,
  Icon,
  handleClick,
  selected,
}: {
  title: string;
  selected: boolean;
  Icon: ReactNode;
  handleClick: () => void;
}) => {
  return (
    <div
      onClick={handleClick}
      className={`p-4 flex gap-4 rounded-xl items-center ${
        selected ? "bg-neutral-100 dark:bg-[#232530]" : ""
      }`}
    >
      <div className="rounded-xl w-10 h-10 flex items-center justify-center">{Icon}</div>
        <h4 className="font-medium grow">{title}</h4>
      <span
        className={`w-4 h-4 border rounded-full ${
          selected && "border-4 border-blue-500"
        }  `}
      ></span>
    </div>
  );
};
export default SettingsOption;
