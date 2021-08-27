import React from "react";
import ReactDOM from "react-dom";
import RootApp from "./App";
import reducer, { initialState } from "./files/reducer";
import { StateProvider } from "./files/StateProvider";

let RootDirectory = document.getElementById("Root");

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <RootApp />
    </StateProvider>
  </React.StrictMode>,
  RootDirectory
);
