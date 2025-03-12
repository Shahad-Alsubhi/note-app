import {
  Link,
  Outlet,
  useNavigate,
} from "react-router";
import { ArchiveIcon, HomeIcon, Logo, RightIcon, SettingIcon } from "../icons";
import Tags from "../pages/Tags";
import SearchInput from "../components/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { BtnActions } from "../store";
import Title from "../components/Title";

const DesktopLayout = () => {
  const navigate = useNavigate();
  const activeBtn = useSelector((state:{activeBtn:string}) => state.activeBtn);
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-[0.25fr_1fr] px-6 xl:px-36 py-8 h-screen grid-rows-[50px_1fr]">
      <div className="py-3 row-span-2  pr-4 flex flex-col h-[calc(100vh-32px)] items-start border-r-[1px] border-neutral-200 dark:border-neutral-800">
        <Logo />
        <button
          onClick={() => {
            navigate("/notes");
            dispatch(BtnActions.SetActiveBtn({ btn: "all" }));
          }}
          className={`rounded-[8px] mt-4 py-2 px-3 flex font-medium gap-2 items-center w-full ${
            activeBtn === "all"
              ? "text-blue-500 bg-neutral-100 dark:bg-[#232530]"
              : ""
          }`}
        >
          <HomeIcon />{" "}
          <span
            className={`text-neutral-950 dark:text-white flex gap-2 items-center w-full *:first:ml-auto ${
              activeBtn !== "all" && "*:first:hidden"
            } `}
          >
            All Notes <RightIcon />
          </span>
        </button>
        <button
          onClick={() => {
            navigate("/notes?archived=true");
            dispatch(BtnActions.SetActiveBtn({ btn: "archived" }));
          }}
          className={`rounded-[8px] mt-1 py-2 px-3 flex font-medium gap-2 items-center w-full ${
            activeBtn === "archived"
              ? "text-blue-500 bg-neutral-100 dark:bg-[#232530]"
              : ""
          }`}
        >
          <ArchiveIcon />
          <span
            className={`text-neutral-950 dark:text-white flex gap-2 items-center w-full *:first:ml-auto ${
              activeBtn !== "archived" && "*:first:hidden"
            } `}
          >
            Archived Notes <RightIcon />{" "}
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
        <Link to={"/settings"}>
          <SettingIcon />
        </Link>
      </div>
      <div className="h-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default DesktopLayout;
