import React from "react";

export default function Navbar() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
      <h4><a href="/">Home</a></h4>
      <h4><a href="./granite_window.js">Granites</a></h4>
      <h4>Marbles</h4>
      <h4>Mosaic</h4>
      <h4>Fireplace</h4>
      <h4>Solid Work</h4>
      <h4>Bowl</h4>
      <h4>Table Tops</h4>
      <h4>Floor Borders</h4>
      <h4>Contact</h4>
    </nav>
  );
}
