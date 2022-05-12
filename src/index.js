import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { NotesProvider } from './context/index';
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NotesProvider>
        <App />
      </NotesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
