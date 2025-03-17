import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import i18next from "i18next";
import global_en from "./translations/en.json";
import global_ar from "./translations/ar.json";
import { I18nextProvider } from "react-i18next";

i18next.init({
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    ar: { global: global_ar },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
    </Provider>
  </StrictMode>
);
