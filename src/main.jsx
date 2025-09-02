import './i18n';
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout.jsx";
import Home from "./pages/home/Home";
import About from "./pages/about/About.jsx";
import MusicClasses from "./pages/music-classes/MusicClasses";
import PortugueseClasses from "./pages/portuguese-classes/PortugueseClasses";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/music-classes" element={<MusicClasses />} />
          <Route path="portuguese-classes" element={<PortugueseClasses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
