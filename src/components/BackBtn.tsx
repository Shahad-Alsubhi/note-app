import { useNavigate } from "react-router";
import { LeftVector } from "../icons";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      aria-label="go back button"
      onClick={() => navigate(-1)}
      className="lg:hidden pl-4 mb-2"
    >
      <LeftVector />
    </button>
  );
};

export default BackBtn;
