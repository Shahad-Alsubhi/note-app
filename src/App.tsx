import desktopRouter from "./routers/desktopRouter";
import { RouterProvider } from "react-router/dom";
import mobileRouter from "./routers/mobileRouter";

const App = () => {
  const isMobile = window.innerWidth <= 1024;

  if (isMobile) return <RouterProvider router={mobileRouter} />;
  return <RouterProvider router={desktopRouter} />;
};

export default App;
