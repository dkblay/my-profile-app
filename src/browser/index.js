import React from "react";
import { hydrate } from "react-dom";
import App from "../shared/components/App";
import { BrowserRouter } from "react-router-dom";

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
