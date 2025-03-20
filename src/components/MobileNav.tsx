import { Link } from "react-router-dom";
import {
  ArchiveIcon,
  HomeIcon,
  SearchIcon,
  SettingIcon,
  TagIcon,
} from "../icons";
import { useState } from "react";

const MobileNav = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  return (
    <nav className="w-full border-t shadow-2xl border-neutral-200 dark:border-neutral-800 absolute bottom-0 grid grid-cols-5  divide-x divide-neutral-200 dark:divide-neutral-800 justify-between px-2 py-3 text-neutral-500 dark:text-neutral-400 ">
      {navItems.map(({ id, label, Icon, path }) => (
        <Link
          aria-label={label}
          key={id}
          to={path}
          onClick={() => setActiveBtn(id)}
        >
          <div
            className={`w-fit flex mx-auto flex-col items-center max-md:*:last:hidden py-1 px-4 gap-1 *:first:w-6 *:first:h-6 ${
              activeBtn === id &&
              "text-blue-500 bg-neutral-100 dark:bg-[#232530] rounded-lg"
            }`}
          >
            <Icon />
            <h1>{label}</h1>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default MobileNav;

const navItems = [
  { id: "all", label: "Home", Icon: HomeIcon, path: "/notes" },
  {
    id: "search",
    label: "Search",
    Icon: SearchIcon,
    path: "/notes?search=",
  },
  {
    id: "archived",
    label: "Archived",
    Icon: ArchiveIcon,
    path: "/notes?archived=true",
  },
  { id: "tags", label: "Tags", Icon: TagIcon, path: "/tags" },
  { id: "settings", label: "Settings", Icon: SettingIcon, path: "/settings" },
];
