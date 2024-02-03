import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes from react-router-dom
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import GraniteWindow from "./components/granite_window"; // Assuming this is your GraniteWindow component
import Marbles from "./components/marbles_window";
import Bowls from "./components/bowl_window";
import Tabletops from "./components/tabletop_window";
import Fireplace from "./components/fireplace_window";
import FloorBorder from "./components/floorborder_window";
import Mosaic from "./components/mosaic_window";
import SolidWork from "./components/solidwork_window";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Use Routes instead of Switch */}
        <Routes>
          <Route path="/granites" element={<GraniteWindow />} />
          <Route path="/marbles" element={<Marbles />} />
          <Route path="/mosaic" element={<Mosaic />} />
          <Route path="/fireplace" element={<Fireplace />} />
          <Route path="/solid-work" element={<SolidWork />} />
          <Route path="/bowl" element={<Bowls />} />
          <Route path="/table-tops" element={<Tabletops />} />
          <Route path="/floor-borders" element={<FloorBorder />} />
          <Route path="/contact" element={<Main/>} />
          {/* Add other routes for your other components */}
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
