import { useTranslation } from "react-i18next";
import BackBtn from "./BackBtn";
import SettingsOption from "./SettingsOption";
import { useEffect, useState } from "react";

const Language = () => {
  const { t, i18n } = useTranslation("global");
  const [lng, setLng] = useState(i18n.language);

  useEffect(() => {
    let dir;
    if (lng === "en") dir = "ltr";
    else dir = "rtl";

    document.dir = dir;
  }, [lng]);

  return (
    <div>
      <BackBtn />
      <SettingsOption
        title={t("en")}
        selected={i18n.language === "en"}
        Icon={undefined}
        handleClick={() => {
          i18n.changeLanguage("en");
          setLng("en");
        }}
      />
      <SettingsOption
        title={t("ar")}
        selected={i18n.language === "ar"}
        Icon={undefined}
        handleClick={() => {
          i18n.changeLanguage("ar");
          setLng("ar");
        }}
      />
    </div>
  );
};

export default Language;
