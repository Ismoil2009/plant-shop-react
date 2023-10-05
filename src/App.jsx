import React, { useState } from "react";

import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header";
import "./style.css";
import Benefits from "./components/Benefits/Benefits";
import Plants from "./components/Plants/Plants";
import Buy from "./components/Buy/Buy";
import Favourite from "./components/Favourite/Favourite";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Benefits />
      <Plants />
      <Buy />
      <Favourite />
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
