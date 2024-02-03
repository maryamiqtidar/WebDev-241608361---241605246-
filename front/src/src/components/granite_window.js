import React from "react";
import Navbar from "./Navbar";


const granite = [
  {
    image: 'baltic_brown.jpg',
    title: 'Boltic Brown',
    description: 'Description for Stone Product 1.',
  },
  {
    image: 'blackgalaxy.jpg',
    title: 'Black Galaxy',
    description: 'Description for Stone Product 2.',
  },
  {
    image: 'blackgranite.jpg',
    title: 'Black Granite',
    description: 'Description for Stone Product 3.',
  },
  {
    image: 'bluepearl.jpg',
    title: 'Blue Pearl',
    description: 'Description for Stone Product 4.',
  },
  {
    image: 'brownpearl.jpg',
    title: 'Brown Pearl',
    description: 'Description for Stone Product 5.',
  },
  {
    image: 'camelbrown.jpg',
    title: 'Camel Brown',
    description: 'Description for Stone Product 6.',
  },
  {
    image: 'lavendergrey.jpg',
    title: 'Lavender Grey',
    description: 'Description for Stone Product 7.',
  },
  {
    image: 'tropicalgrey.jpg',
    title: 'Tropical Grey',
    description: 'Description for Stone Product 8.',
  },
  // Add more stone products as needed
];

function Granite() {
  return (
    <div className="right-container">
      <Navbar />
      <div className="container">
        <div className="row">
          {/* Render the first row of images */}
          {granite.slice(0, 3).map((product, index) => (
            <div key={index} className="col-md-4 mb-5">
              <img src={product.image} alt={product.title} className="stone-img" />
              <h5>{product.title}</h5>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        <div className="row">
          {/* Render the second row of images */}
          {granite.slice(3, 6).map((product, index) => (
            <div key={index} className="col-md-4 mb-5">
              <img src={product.image} alt={product.title} className="stone-img" />
              <h5>{product.title}</h5>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Granite;