import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { NotesProvider, AuthProvider } from './context/index';
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <NotesProvider>
          <App />
        </NotesProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
