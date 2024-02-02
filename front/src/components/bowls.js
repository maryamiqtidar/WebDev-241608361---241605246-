// Bowls.js
import axios from 'axios';
import React, { useState } from 'react';
import './stone.css'; // Import CSS file for styling

const bowlsImages = [
  {
    image: 'sink1.jpg',
    title: 'Bowl 01',
  },
  {
    image: 'sink2.jpg',
    title: 'Bowl 02',
  },
  {
    image: 'sink3.jpg',
    title: 'Bowl 03',
  },
  {
    image: 'sink4.jpg',
    title: 'Bowl 04',
  },
  {
    image: 'sink5.jpg',
    title: 'Bowl 05',
  },
  {
    image: 'sink6.jpg',
    title: 'Bowl 06',
  },
];

function Bowls() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };


const handleSubmitOrder = (e) => {
  e.preventDefault();
  console.log('Form target:', e.target); // Log the entire target object to inspect its structure
  console.log('Form elements:', e.target.elements); // Log the elements property to see if it's accessible
  
  // Access form elements if they are present
  const formData = {
    name: e.target.elements.name ? e.target.elements.name.value : '',
    email: e.target.elements.email ? e.target.elements.email.value : '',
    mobile_number: e.target.elements.mobile_number ? e.target.elements.mobile_number.value : '',
    required_size: e.target.elements.required_size ? e.target.elements.required_size.value : '',
    quantity: e.target.elements.quantity ? e.target.elements.quantity.value : ''
  };

  console.log('Form data:', formData); // Log the extracted form data
  
  // Make sure form data is not empty before making the request
  if (formData.name && formData.email && formData.mobile_number && formData.required_size && formData.quantity) {
    axios.post('http://127.0.0.1:8000/orders/', formData)
      .then(response => {
        console.log('Order submitted successfully:', response.data);
        // Clear selectedImage after submitting order
        setSelectedImage(null);
      })
      .catch(error => {
        console.error('Error submitting order:', error);
      });
  } else {
    console.error('Form data is incomplete');
  }
};

  return (
    <div className="right-container">
      <div className="row">
        {bowlsImages.map((product, index) => (
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

export default Bowls;
