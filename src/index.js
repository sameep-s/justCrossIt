import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { NotesProvider } from './context/index';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
