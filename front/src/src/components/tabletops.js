// TableTops.js
import React, { useState } from 'react';
import './stone.css'; // Import CSS file for styling

const tabletopImages = [
  {
    image: 'tabletop1.jpg',
    title: 'Table Top 1',

  },
  {
    image: 'tabletop2.jpg',
    title: 'Table Top 2',
  },
  {
    image: 'tabletop3.jpg',
    title: 'Table Top 3',

  },
  {
    image: 'tabletop4.jpg',
    title: 'Table Top 4',

  },
  {
    image: 'tabletop5.jpg',
    title: 'Table Top 5',

  },
  {
    image: 'tabletop6.jpg',
    title: 'Table Top 6',

  },
];

function TableTops() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Implement logic to submit order via email
    console.log('Submitting order:', selectedImage.title);
    // Clear selectedImage after submitting order
    setSelectedImage(null);
  };

  return (
    <div className="left-container">
      <div className="row">
        {tabletopImages.map((product, index) => (
          <div key={index} className="col-md-4 mb-5" onClick={() => handleImageClick(product)}>
            <img src={product.image} alt={product.title} className="stone-img" />
            <h5>{product.title}</h5>
          </div>
        ))}
      </div>
      {/* Modal for ordering */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
            <div className="order-info">
              <h2>Order {selectedImage.title}</h2>
              <form onSubmit={handleSubmitOrder}>
                <div className="form-group">
                  <label>Name:</label>
                  <input type="text" className="form-control" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label>Mobile Number:</label>
                  <input type="tel" className="form-control" placeholder="Enter your mobile number" required />
                </div>
                <div className="form-group">
                  <label>Required Size:</label>
                  <input type="text" className="form-control" placeholder="Enter required size" required />
                </div>
                <div className="form-group">
                  <label>Quantity:</label>
                  <input type="number" className="form-control" placeholder="Enter quantity" required />
                </div>
                <button type="submit" className="btn btn-primary">Send Email</button>
              </form>
            </div>
            <div className="order-image">
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableTops;