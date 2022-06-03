import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const appElement = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const container = document.getElementById("root");
const hasChildNodes = !!container?.hasChildNodes();

hasChildNodes
  ? hydrateRoot(container, appElement)
  : createRoot(container).render(appElement);

serviceWorkerRegistration.unregister();
reportWebVitals();
