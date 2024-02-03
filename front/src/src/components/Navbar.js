import React, { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(""); // State to track the active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
    // Dynamically load JavaScript files based on the link clicked
    switch (link) {
      case "Granites":
        import("./granite.js").then((module) => {
          // Do something with the imported module, like executing its functions or initializing its components
          console.log("Granites module loaded:", module);
        });
        break;
      case "Marbles":
        import("./marbles.js").then((module) => {
          // Do something with the imported module, like executing its functions or initializing its components
          console.log("Marbles module loaded:", module);
        });
        break;
      // Add cases for other links as needed
      default:
        break;
    }
  };
  
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
      <h4
        onClick={() => handleLinkClick("Home")}
        className={activeLink === "Home" ? "active" : ""}
      >
        Home
      </h4>
      
      <h4
        onClick={() => handleLinkClick("Granites")}
        className={activeLink === "Granites" ? "active" : ""}
      >
        Granites
      </h4>
      <h4
        onClick={() => handleLinkClick("Marbles")}
        className={activeLink === "Marbles" ? "active" : ""}
      >
        Marbles
      </h4>
      <h4
        onClick={() => handleLinkClick("Mosaic")}
        className={activeLink === "Mosaic" ? "active" : ""}
      >
        Mosaic
      </h4>
      <h4
        onClick={() => handleLinkClick("Fireplace")}
        className={activeLink === "Fireplace" ? "active" : ""}
      >
        Fireplace
      </h4>
      <h4
        onClick={() => handleLinkClick("SolidWork")}
        className={activeLink === "Solid Work" ? "active" : ""}
      >
        Solid Work
      </h4>
      <h4
        onClick={() => handleLinkClick("Bowl")}
        className={activeLink === "Bowl" ? "active" : ""}
      >
        Bowl
      </h4>
      <h4
        onClick={() => handleLinkClick("TableTops")}
        className={activeLink === "TableTops" ? "active" : ""}
      >
        Table Tops
      </h4>

      <h4
        onClick={() => handleLinkClick("FloorBorders")}
        className={activeLink === "FloorBorders" ? "active" : ""}
      >
        Floor Borders
      </h4>

      <h4
        onClick={() => handleLinkClick("Contact")}
        className={activeLink === "Contact" ? "active" : ""}
      >
        Contact
      </h4>
    </nav>
  );
}
