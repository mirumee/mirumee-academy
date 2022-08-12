import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PATHS } from "./paths";
import { Demo } from "./routes/demo";
import { StarWars } from "./routes/starwars";

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Demo />} />
          <Route path={PATHS.STARWARS} element={<StarWars />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
