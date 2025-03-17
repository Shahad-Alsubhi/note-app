import { useNavigate } from "react-router";
import { SearchIcon } from "../icons";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";

const SearchInput = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("global");

  const debouncedSearch = debounce(
    (e) => navigate(`/notes?search=${e.target.value}`),
    500
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e);
  };
  return (
    <div className="w-[300px] max-lg:mx-4 text-neutral-500 dark:text-neutral-400 max-lg:w-[calc(100%-32px)]  rounded-[8px] px-4 py-2 flex gap-2 items-center border border-neutral-300 lg:ms-auto lg:me-6 dark:border-neutral-600">
      <SearchIcon />
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder={t("search_placeholder")}
        aria-label="Search Notes"
        className="focus:outline-none w-full placeholder:text-inherit text-sm "
      />
    </div>
  );
};

export default SearchInput;
