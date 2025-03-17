import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { BtnActions } from "../store";

const useBtnNavigation = () => {
  const navigate = useNavigate();
  const activeBtn = useSelector(
    (state: { activeBtn: string }) => state.activeBtn
  );
  const dispatch = useDispatch();

  const handleNavigation = (path: string, btn: string) => {
    navigate(path);
    dispatch(BtnActions.SetActiveBtn({ btn }));
  };

  return { activeBtn, handleNavigation };
};

export default useBtnNavigation;
