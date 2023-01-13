import React from "react";
import styleApp from "./App.module.css";
import { Header } from "../Header/Header";
import { BreadCrumps } from "../BreadCrumps/BreadCrumps";
import { Main } from "../Main/Main";

export const App = () => {
  return (
    <div className={styleApp.app}>
      <Header />
      <BreadCrumps />
      <Main />
    </div>
  );
};
