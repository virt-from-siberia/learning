// Core
import React, { FC } from "react";
import { Provider } from "react-redux";

//Other
import { store } from "./init//store";

//Domains
import { Starships } from "./bus/starships";

export const App: FC = () => (
  <Provider store={store}>
    <Starships />
  </Provider>
);
