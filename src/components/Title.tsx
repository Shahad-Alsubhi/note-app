import { useLocation, useParams, useSearchParams } from "react-router";
import BackBtn from "./BackBtn";
import { useTitleUtils } from "../hooks/useTitleUtils";

const Title = () => {
  const [searchParam] = useSearchParams();
  const location = useLocation();
  const { id } = useParams();
  const {getTitle}=useTitleUtils()
  if (
    id ||
    location.pathname.includes("theme") ||
    location.pathname.includes("language")
  )
    return null;

  return (
    <>
      {searchParam.get("tag") && <BackBtn />}
      <h1 className="font-bold text-2xl max-lg:ps-4 max-lg:mb-4">
        {getTitle(searchParam, location.pathname)}
      </h1>
    </>
  );
};

export default Title;
