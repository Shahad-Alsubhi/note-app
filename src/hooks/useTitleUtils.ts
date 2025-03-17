import { useTranslation } from "react-i18next";

export const useTitleUtils = () => {
  const { t } = useTranslation("global");

  const getTitle = (searchParam: URLSearchParams, pathname: string) => {
    const search = searchParam.get("search");
    const tag = searchParam.get("tag");
    const archived = searchParam.get("archived");

    if (search === "null") return t("search");
    if (search) return `${t("search_result")} ${search}`;
    if (tag) return `${t("Notes_Tagged")} ${tag}`;
    if (archived) return t("archived_notes");

    return pathname.includes("settings")
      ? t("settings")
      : pathname.includes("tags")
      ? t("tags")
      : t("all_notes");
  };

  const getEmptyStateText = (searchParam: URLSearchParams) => {
    const search = searchParam.get("search");
    const archived = searchParam.get("archived");

    if (search) return t("search_mismatch");
    if (archived) return t("no_archived");
    return t("no_notes");
  };

  return { getTitle, getEmptyStateText };
};
