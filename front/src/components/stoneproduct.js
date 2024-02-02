// StoneProducts.js
import React from 'react';
import ReactDOM from 'react-dom'; 
import Granites from './granite_window';
import Marbles from './marbles_window';
import Mosaic from './mosaic_window';
import FloorBorder from './floorborder_window';
import Bowls from './bowl_window';
import Fireplace from './fireplace_window';
import SolidWork from './solidwork_window';
import Tabletops from './tabletop_window';

const stoneProductsData = [
  {
    image: 'granite.jpg',
    title: 'Granites',
    description: '',
    component: <Granites />, // Import and assign the component for granites
  },
  {
    image: 'marbles.jpg',
    title: 'Marbles',
    description: '',
    component: <Marbles />,
  },
  {
    image: 'mosaic.jpg',
    title: 'Mosaic',
    description: '',
    component: <Mosaic />,
  },
  {
    image: 'fireplace.jpg',
    title: 'Fireplace',
    description: '',
    component: <Fireplace />,
  },
  {
    image: 'solidwork.jpg',
    title: 'Solid Work',
    description: '',
    component: <SolidWork />,
  },
  {
    image: 'bowl.jpg',
    title: 'Bowl',
    description: '',
    component: <Bowls/>,
  },
  {
    image: 'tabletop.jpg',
    title: 'Table Top',
    description: '',
    component: <Tabletops />,
  },
  {
    image: 'floorborder.jpg',
    title: 'Floor Border',
    description: '',
    component: <FloorBorder />,
  },
  // Add more stone products as needed
];

function StoneProducts() {
  const handleClick = (component) => {
    if (component) {
      const newWindow = window.open('', '_blank');
      newWindow.document.write('<div id="root"></div>');
      ReactDOM.render(component, newWindow.document.getElementById('root'));
    }
  };

  return (
    <section className="stone-products">
      <div className="container">
        <div className="row">
          {stoneProductsData.map((product, index) => (
            <div key={index} className="col-md-3 mb-4">
              <button onClick={() => handleClick(product.component)} style={{ border: 'none', padding: 0, background: 'none' }}>
                <img src={product.image} alt={product.title} className="stone-img" style={{ width: '100%', border: 'none' }} />
              </button>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StoneProducts;