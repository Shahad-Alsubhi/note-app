import { useNavigate } from "react-router";
import { LeftVector } from "../icons";
import { useTranslation } from "react-i18next";

const BackBtn = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation("global");

  return (
    <button
      aria-label="go back button"
      onClick={() => navigate(-1)}
      className={`lg:hidden ps-2 mb-2 ${i18n.language==="ar"&&"*:rotate-180"}`}
    >
      <LeftVector />
    </button>
  );
};

export default BackBtn;
