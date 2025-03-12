import { useNavigate } from "react-router";
import { TagIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { BtnActions } from "../store";

const Tag = ({ title }: { title: string }) => {
  const activeBtn = useSelector((state:{activeBtn:string}) => state.activeBtn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`flex gap-2 py-2.5 items-center rounded-lg px-4 ${
        activeBtn === title
          ? "*:first:text-blue-500 bg-neutral-100 dark:bg-[#232530]"
          : ""
      }`}
      onClick={() => {
        navigate(`/notes?tag=${title}`);
        dispatch(BtnActions.SetActiveBtn({ btn: title }));
      }}
    >
      <TagIcon />
      <h1 className="font-medium text-[15px] capitalize">{title}</h1>
    </div>
  );
};

export default Tag;
