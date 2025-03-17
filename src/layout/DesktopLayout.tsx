import { Outlet } from "react-router";
import { ArchiveIcon, HomeIcon, Logo, RightIcon, SettingIcon } from "../icons";
import Tags from "../pages/Tags";
import SearchInput from "../components/SearchInput";
import Title from "../components/Title";
import useBtnNavigation from "../hooks/useBtnNavigation";
import { useTranslation } from "react-i18next";

const DesktopLayout = () => {
  const { activeBtn, handleNavigation } = useBtnNavigation();
  const { t ,i18n} = useTranslation("global");

  return (
    <div className="grid grid-cols-[0.25fr_1fr] px-6 xl:px-36 py-8 h-screen grid-rows-[50px_1fr]">
      <div className="py-3 row-span-2 max-w-full overflow-x-hidden pe-4 flex flex-col h-[calc(100vh-32px)] items-start border-e-[1px] border-neutral-200 dark:border-neutral-800">
        <Logo />
        <button
          onClick={() => handleNavigation("/notes", "all")}
          className={`rounded-[8px] mt-4 py-2 px-3 flex font-medium gap-2 items-center w-full ${
            activeBtn === "all"
              ? "text-blue-500 bg-neutral-100 dark:bg-[#232530]"
              : ""
          }`}
        >
          <HomeIcon />
          <span
            className={`text-neutral-950 dark:text-white flex gap-2 items-center w-full *:first:ms-auto ${
              activeBtn !== "all" && "*:first:hidden" } ${i18n.language==="ar"&&"*:rotate-180"
            } `}
          >
            {t("all_notes")} <RightIcon />
          </span>
        </button>
        <button
          onClick={() => handleNavigation("/notes?archived=true", "archived")}
          className={`rounded-[8px] mt-1 py-2 px-3 flex font-medium gap-2 items-center w-full ${
            activeBtn === "archived"
              ? "text-blue-500 bg-neutral-100 dark:bg-[#232530]"
              : ""
          }`}
        >
          <ArchiveIcon />
          <span
            className={`text-neutral-950 dark:text-white flex gap-2 items-center w-full *:first:ms-auto ${
              activeBtn !== "archived" && "*:first:hidden"
            } ${i18n.language==="ar"&&"*:rotate-180"} `}
          >
            {t("archived_notes")}
            <RightIcon />{" "}
          </span>
        </button>
        <hr className="text-neutral-200 w-full h-[1px] mt-2 mb-0.5 dark:text-neutral-800 " />
        <div className="h-full w-full overflow-y-scroll">
          <Tags />
        </div>
      </div>
      <div className="flex items-center px-8 pb-4 *:last:float-end border-b-[1px] border-neutral-200 dark:border-neutral-800">
        <Title />
        <SearchInput />
        <button
          aria-label="Go to Settings"
          onClick={() => handleNavigation("/settings", "theme")}
        >
          <SettingIcon />
        </button>
      </div>
      <div className="h-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default DesktopLayout;
