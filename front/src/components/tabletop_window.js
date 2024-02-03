import React, { useState } from 'react';
import './stone.css'; 
import axios from 'axios';

const tabletopsImages = [
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
  {
    image: 'tabletop7.jpg',
    title: 'Table Top 7',

  },
  {
    image: 'tabletop8.jpg',
    title: 'Table Top 8',

  },
  {
    image: 'tabletop9.jpg',
    title: 'Table Top 9',

  },

];

function TableTops() {
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
    <div className="right-container">
       <h1 style={{ marginTop: '60px' }}>Table Tops</h1>
      <div className="row">
        {tabletopsImages.map((product, index) => (
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

export default TableTops;
