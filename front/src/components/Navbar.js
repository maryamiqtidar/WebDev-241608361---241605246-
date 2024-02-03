import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
      <h4><Link to="/" className="navbar-link">Home</Link></h4>
      <h4><Link to="/granites" target = "blank" className="navbar-link">Granites</Link></h4>
      <h4><Link to="/marbles" target = "blank" className="navbar-link">Marbles</Link></h4>
      <h4><Link to="/mosaic" target = "blank" className="navbar-link">Mosaic</Link></h4>
      <h4><Link to="/fireplace" target = "blank" className="navbar-link">Fireplace</Link></h4>
      <h4><Link to="/solid-work" target = "blank" className="navbar-link">Solid Work</Link></h4>
      <h4><Link to="/bowl" target = "blank" className="navbar-link">Bowl</Link></h4>
      <h4><Link to="/table-tops" target = "blank" className="navbar-link">Table Tops</Link></h4>
      <h4><Link to="/floor-borders" target = "blank" className="navbar-link">Floor Borders</Link></h4>
    </nav>
  );
}
