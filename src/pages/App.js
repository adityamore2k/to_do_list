import React from "react";
import "../styles.css";
import Todos from "./Todos";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImportantTodos from "./ImportantTodos";
import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="todos" element={<Todos />} />
        <Route path="important" element={<ImportantTodos />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
