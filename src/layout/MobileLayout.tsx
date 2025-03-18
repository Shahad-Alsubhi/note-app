import { Outlet, useNavigate, useSearchParams } from "react-router";
import { Logo } from "../icons";
import AddNoteBtn from "../components/AddNoteBtn";
import MobileNav from "../components/MobileNav";
import Title from "../components/Title";
import SearchInput from "../components/SearchInput";

const MobileLayout = () => {
  const navigate = useNavigate();
  const SearchPath = useSearchParams()[0].get("search");
  return (
    <div className="h-screen relative">
      <header className="bg-neutral-100 dark:bg-[#232530] px-4 md:px-8 py-3 md:py-4">
        <Logo />
      </header>
      <div className="p-5 max-md:p-4 relative h-[calc(100vh-100.8px)] md:h-[calc(100vh-136.8px)] w-full rounded-t-lg overflow-hidden">
        <Title />
        {SearchPath && <SearchInput />}
        <Outlet />
        <AddNoteBtn text="+" onClick={() => navigate("/notes/new")} />
      </div>
      <MobileNav />
    </div>
  );
};

export default MobileLayout;
