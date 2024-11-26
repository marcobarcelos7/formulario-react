import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
  );
};

export default AppRouter;