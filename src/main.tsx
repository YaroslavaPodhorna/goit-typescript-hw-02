import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "modern-normalize";
import App from "./components/App/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
