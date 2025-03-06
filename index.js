import React from "react";
import ReactDOM from "react-dom";
import AppLayout from "./src/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>,
  document.getElementById("root")
);
