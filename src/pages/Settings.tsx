import { Outlet, useNavigate } from "react-router";
import { LanguageIcon, LightModeIcon, RightIcon } from "../icons";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import useBtnNavigation from "../hooks/useBtnNavigation";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const { activeBtn, handleNavigation } = useBtnNavigation();
  
  useEffect(() => {    
    if (isLargeScreen) navigate("/settings/theme");    
  },[]);
  const { t, i18n } = useTranslation("global");

  return (
    <div className="lg:grid h-full grid-cols-[0.65fr_1.5fr_0.5fr]">
      <div className=" px-4 lg:pt-6 lg:border-e border-neutral-200 dark:border-neutral-800">
        <button
          onClick={() => handleNavigation("/settings/theme", "theme")}
          className={`rounded-[8px] mt-1 py-2 px-3 flex max-lg:mb-4 font-medium gap-2 items-center w-full ${
            activeBtn === "theme"
              ? "text-blue-500 bg-neutral-100 dark:bg-[#232530]"
              : ""
          }`}
        >
          <LightModeIcon />
          <span
            className={`text-neutral-950 dark:text-white flex gap-2 items-center w-full *:first:ms-auto ${
              activeBtn !== "theme" && "*:first:hidden"
            } ${i18n.language === "ar" && "*:rotate-180"} `}
          >
            {t("theme")} <RightIcon />
          </span>
        </button>
        <button
          onClick={() => handleNavigation("/settings/language", "language")}
          className={`rounded-[8px] mt-1 py-2 px-3 flex font-medium gap-2 items-center w-full ${
            activeBtn === "language"
              ? "text-blue-500 bg-neutral-100 dark:bg-[#232530]"
              : ""
          }`}
        >
          <LanguageIcon />
          <span
            className={`text-neutral-950 dark:text-white flex gap-2 items-center w-full *:first:ms-auto ${
              activeBtn !== "language" && "*:first:hidden"
            } ${i18n.language === "ar" && "*:rotate-180"}`}
          >
            {t("language")} <RightIcon />
          </span>
        </button>
      </div>
      <div className="p-7">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
