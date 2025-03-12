import { Outlet, useNavigate } from "react-router";
import { LanguageIcon, LightModeIcon, RightIcon } from "../icons";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { BtnActions } from "../store";

const Settings = () => {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const activeBtn = useSelector((state:{activeBtn:string}) => state.activeBtn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLargeScreen) navigate("/settings/theme");
  }, []);

  return (
    <div className="lg:grid h-full grid-cols-[0.65fr_1.5fr_0.5fr]">
      <div className=" px-4 lg:pt-6 lg:border-r border-neutral-200 dark:border-neutral-800">
        <button
          onClick={() => {
            navigate("/settings/theme");
            dispatch(BtnActions.SetActiveBtn({ btn: "theme" }));
          }}
          className={`rounded-[8px] mt-1 py-2 px-3 flex max-lg:mb-4 font-medium gap-2 items-center w-full ${
            activeBtn === "theme"
              ? "text-blue-500 bg-neutral-100 dark:bg-[#232530]"
              : ""
          }`}
        >
          <LightModeIcon />
          <span
            className={`text-neutral-950 dark:text-white flex gap-2 items-center w-full *:first:ml-auto ${
              activeBtn !== "theme" && "*:first:hidden"
            } `}
          >
            Theme <RightIcon />
          </span>
        </button>
        <button
          onClick={() => {
            navigate("/settings/language");
            dispatch(BtnActions.SetActiveBtn({ btn: "language" }));
          }}
          className={`rounded-[8px] mt-1 py-2 px-3 flex font-medium gap-2 items-center w-full ${
            activeBtn === "language"
              ? "text-blue-500 bg-neutral-100 dark:bg-[#232530]"
              : ""
          }`}
        >
          <LanguageIcon />
          <span
            className={`text-neutral-950 dark:text-white flex gap-2 items-center w-full *:first:ml-auto ${
              activeBtn !== "language" && "*:first:hidden"
            } `}
          >
            Language <RightIcon />
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
