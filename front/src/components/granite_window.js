import React from 'react';

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
    <section className="stone-products">
      <div className="container">
        <div className="row">
          {/* Render the first row of images */}
          {granite.slice(0, 4).map((product, index) => (
            <div key={index} className="col-md-3 mb-4">
              <img src={product.image} alt={product.title} style={{
                width: '20%', // Make images responsive
                borderRadius: '8px', // Add border-radius for rounded corners
                marginBottom: '10px', // Adjust as needed
              }} />
              <h2 style={{ fontSize: '1.5rem', marginTop: '10px' }}>{product.title}</h2>
              <p style={{ fontSize: '1rem', color: '#666' }}>{product.description}</p>
            </div>
          ))}
        </div>
        <div className="row">
          {/* Render the second row of images */}
          {granite.slice(4, 8).map((product, index) => (
            <div key={index} className="col-md-3 mb-4">
              <img src={product.image} alt={product.title} style={{
                width: '20%', // Make images responsive
                borderRadius: '8px', // Add border-radius for rounded corners
                marginBottom: '10px', // Adjust as needed
              }} />
              <h2 style={{ fontSize: '1.5rem', marginTop: '10px' }}>{product.title}</h2>
              <p style={{ fontSize: '1rem', color: '#666' }}>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Granite;
