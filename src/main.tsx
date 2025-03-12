import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import desktopRouter from "./routers/desktopRouter";
import { RouterProvider } from "react-router/dom";
import mobileRouter from "./routers/mobileRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <div className="desktop-layout">
        <RouterProvider router={desktopRouter} />
      </div>
      <div className="mobile-layout">
        <RouterProvider router={mobileRouter} />
      </div>
    </Provider>
  </StrictMode>
);
