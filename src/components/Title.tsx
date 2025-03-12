import { useLocation, useParams, useSearchParams } from "react-router";
import { getTitle } from "../utils";
import BackBtn from "./BackBtn";

const Title = () => {
  const [searchParam] = useSearchParams();
  const location = useLocation();
  const { id } = useParams();
  if (
    id ||
    location.pathname.includes("theme") ||
    location.pathname.includes("language")
  )
    return null;
  return (
    <>
      {searchParam.get("tag") && <BackBtn />}
      <h1 className="font-bold text-2xl max-lg:pl-4 max-lg:mb-4">
        {getTitle(searchParam, location.pathname)}
      </h1>
    </>
  );
};

export default Title;
