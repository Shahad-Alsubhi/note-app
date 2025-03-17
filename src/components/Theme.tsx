import { useEffect, useState } from "react";
import { DarkModeIcon, LightModeIcon, SystemIcon } from "../icons";
import SettingsOption from "./SettingsOption";
import BackBtn from "./BackBtn";
import { useTranslation } from "react-i18next";

const Theme = () => {
  const [theme, seTheme] = useState(
    document.body.classList.contains("dark") ? "dark" : "light"
  );
  const { t } = useTranslation("global");

  useEffect(() => {
    if (theme === "dark") return document.body.classList.add("dark");
    if (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)"))
      return document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [theme]);
   
  return (
    <div>
      <BackBtn />
      <SettingsOption
        title={t("theme_options.light")}
        Icon={<LightModeIcon />}
        selected={theme === "light"}
        handleClick={() => seTheme("light")}
      />
      <SettingsOption
        selected={theme === "dark"}
        title={t("theme_options.dark")}
        Icon={<DarkModeIcon />}
        handleClick={() => seTheme("dark")}
      />
      <SettingsOption
        selected={theme === "system"}
        title={t("theme_options.system")}
        Icon={<SystemIcon />}
        handleClick={() => seTheme("system")}
      />
    </div>
  );
};

export default Theme;
