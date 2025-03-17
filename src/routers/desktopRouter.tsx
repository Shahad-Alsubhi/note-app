import { createBrowserRouter } from "react-router-dom";
import Notes from "../pages/Notes";
import DesktopLayout from "../layout/DesktopLayout";
import Settings from "../pages/Settings";
import Theme from "../components/Theme";
import Language from "../components/Language";
import Note from "../pages/Note";
import NewNote from "../pages/NewNote";

const desktopRouter = createBrowserRouter([
  {
    path: "/",
    element: <DesktopLayout />,
    children: [
      {
        index: true,
        element: <Notes />,
      },
      {
        path: "/notes",
        element: <Notes />,
        children: [
          { path: "/notes/:id", element: <Note /> },
          {
            path: "/notes/new",
            element: <NewNote />,
          },
        ],
      },
      {
        path: "/settings",
        element: <Settings />,
        children: [
          {
            path: "/settings/theme",
            element: <Theme />,
          },
          {
            path: "/settings/language",
            element: <Language />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <p>Not Found</p>,
  },
]);

export default desktopRouter;
