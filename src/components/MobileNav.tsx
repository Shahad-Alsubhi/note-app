import { Link } from "react-router";
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
    <nav className="w-full border-t shadow-2xl border-neutral-200 dark:border-neutral-800  fixed bottom-0 grid grid-cols-5  divide-x divide-neutral-200 dark:divide-neutral-800 justify-between px-2 py-3 text-neutral-500 dark:text-neutral-400 ">
      <Link
        onClick={() => setActiveBtn("all")}
        to={"/notes"}
        className={`flex flex-col items-center max-md:*:last:hidden py-1 px-4 gap-1 *:first:w-6 *:first:h-6 ${
          activeBtn === "all" &&
          "text-blue-500 bg-neutral-100 dark:bg-[#232530]  rounded-lg"
        }`}
      >
        <HomeIcon />
        <h1>Home</h1>
      </Link>
      <Link
        onClick={() => setActiveBtn("search")}
        to={"/notes?search=null"}
        className={`flex flex-col items-center max-md:*:last:hidden py-1 px-4 gap-1 *:first:w-6 *:first:h-6  ${
          activeBtn === "search" &&
          "text-blue-500 bg-neutral-100 dark:bg-[#232530]  rounded-lg"
        }`}
      >
        <SearchIcon />
        <h1>Search</h1>
      </Link>
      <Link
        onClick={() => setActiveBtn("archived")}
        to={"/notes?archived=true"}
        className={`flex flex-col items-center max-md:*:last:hidden py-1 px-4 gap-1 *:first:w-6 *:first:h-6  ${
          activeBtn === "archived" &&
          "text-blue-500 bg-neutral-100 dark:bg-[#232530]  rounded-lg"
        }`}
      >
        <ArchiveIcon />
        <h1>Archived</h1>
      </Link>
      <Link
        onClick={() => setActiveBtn("tags")}
        to={"/tags"}
        className={`flex flex-col items-center max-md:*:last:hidden py-1 px-4 gap-1 *:first:w-6 *:first:h-6  ${
          activeBtn === "tags" &&
          "text-blue-500 bg-neutral-100 dark:bg-[#232530]  rounded-lg"
        }`}
      >
        <TagIcon />
        <h1>Tags</h1>
      </Link>
      <Link
        onClick={() => setActiveBtn("settings")}
        to={"/settings"}
        className={`flex flex-col items-center max-md:*:last:hidden py-1 px-4 gap-1 *:first:w-6 *:first:h-6  ${
          activeBtn === "settings" &&
          "text-blue-500 bg-neutral-100 dark:bg-[#232530]  rounded-lg"
        }`}
      >
        <SettingIcon />
        <h1>Settings</h1>
      </Link>
    </nav>
  );
};

export default MobileNav;
