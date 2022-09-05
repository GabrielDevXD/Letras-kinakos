import React from "react";
import { Route, Routes } from "react-router-dom";
import StartPage from "./src/pages/startpage/index";
import { RoutePath } from "./src/types/routes";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.START} element={<StartPage />} />
    </Routes>
  );
};

export default Router;
