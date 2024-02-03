// Granite.js
import React, { useState } from 'react';
import './stone.css'; // Import CSS file for styling
import axios from 'axios';

const floorborderImages = [
  {
    image: 'floorborder1.jpg',
    title: 'Floor Border 1',

  },
  {
    image: 'floorborder2.jpg',
    title: 'Floor Border 2',
  },
  {
    image: 'floorborder3.jpg',
    title: 'Floor Border 3',

  },
  {
    image: 'floorborder4.jpg',
    title: 'Floor Border 4',

  },
  {
    image: 'floorborder5.jpg',
    title: 'Floor Border 5',

  },
  {
    image: 'floorborder6.jpg',
    title: 'Floor Border 6',

  },
];

function FloorBorders() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

const handleSubmitOrder = (e) => {
  e.preventDefault();
  axios.post('http://127.0.0.1:8000/orders/', {
    name: e.target.elements.name.value,
    email: e.target.elements.email.value,
    mobile_number: e.target.elements.mobile_number.value,
    required_size: e.target.elements.required_size.value,
    quantity: e.target.elements.quantity.value
  })
  .then(response => {
    console.log('Order submitted successfully:', response.data);
    // Clear selectedImage after submitting order
    setSelectedImage(null);
  })
  .catch(error => {
    console.error('Error submitting order:', error);
  });
};
  return (
    <div className="left-container">
      <div className="row">
        {floorborderImages.map((product, index) => (
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
              <form method="post" onSubmit={handleSubmitOrder}>
  <div className="form-group">
    <label>Name:</label>
    <input type="text" name="name" className="form-control" placeholder="Enter your name" required />
  </div>
  <div className="form-group">
    <label>Email:</label>
    <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
  </div>
  <div className="form-group">
    <label>Mobile Number:</label>
    <input type="tel" name="mobile_number" className="form-control" placeholder="Enter your mobile number" required />
  </div>
  <div className="form-group">
    <label>Required Size:</label>
    <input type="text" name="required_size" className="form-control" placeholder="Enter required size" required />
  </div>
  <div className="form-group">
    <label>Quantity:</label>
    <input type="number" name="quantity" className="form-control" placeholder="Enter quantity" required />
  </div>
  <button type="submit" className="btn btn-primary">Send Order</button>
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

export default FloorBorders;