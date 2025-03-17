import { createBrowserRouter } from "react-router-dom";
import Notes from "../pages/Notes";
import Note from "../pages/Note";
import MobileLayout from "../layout/MobileLayout";
import Tags from "../pages/Tags";
import Settings from "../pages/Settings";
import Theme from "../components/Theme";
import Language from "../components/Language";
import NewNote from "../pages/NewNote";

const mobileRouter = createBrowserRouter([
  {
    path: "/",
    element: <MobileLayout />,
    children: [
      {
        index: true,
        element: <Notes />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },

      {
        path: "/notes/:id",
        element: <Note />,
      },
      {
        path: "/tags",
        element: <Tags />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/settings/theme",
        element: <Theme />,
      },
      {
        path: "/settings/language",
        element: <Language />,
      },
      {
        path: "/notes/new",
        element: <NewNote />,
      },
    ],
  },
  {
    path: "*",
    element: <p>Not Found</p>,
  },
]);

export default mobileRouter;
