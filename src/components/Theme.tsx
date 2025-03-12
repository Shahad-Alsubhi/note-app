import { useEffect, useState } from "react";
import { DarkModeIcon, LightModeIcon, SystemIcon } from "../icons";
import SettingsOption from "./SettingsOption";
import BackBtn from "./BackBtn";

const Theme = () => {
  const [theme, seTheme] = useState(
    document.body.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    if (theme === "dark") return document.body.classList.add("dark");
    if (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)"))
      return document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [theme]);

  return (
    <div>
      <BackBtn />
      <h3 className="font-medium ml-4">Color Theme</h3>
      <p className="mb-4 font-light ml-4">Choose your color theme:</p>
      <SettingsOption
        title={"Light Mode"}
        subTitle={"Pick a clean and classic light theme"}
        Icon={<LightModeIcon />}
        selected={theme === "light"}
        handleClick={() => seTheme("light")}
      />
      <SettingsOption
        selected={theme === "dark"}
        title={"Dark Mode"}
        subTitle={"Select a sleek and modern dark theme"}
        Icon={<DarkModeIcon />}
        handleClick={() => seTheme("dark")}
      />
      <SettingsOption
        selected={theme === "system"}
        title={"System"}
        subTitle={"Adapts to your device’s theme"}
        Icon={<SystemIcon />}
        handleClick={() => seTheme("system")}
      />
    </div>
  );
};

export default Theme;
