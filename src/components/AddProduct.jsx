import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './AddProduct.css';

const AddProduct = ({ onClose }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState(null);
  const [imageType, setImageType] = useState("");
  const [weight, setWeight] = useState("");



  const handleNameChange = (e) => {
    setName(e.target.value);
  };


  const handleImageType = (e) => {
    setImageType(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  const handleImageChange = (e) => {
    // Handle image upload logic here
    const file = e.target.files[0];
    setImage(file);
  };

const handleSubmit = () => {
    // Prepare the data object to send in the request body
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append("weight",weight);
    formData.append("imageType",imageType);
    formData.append('image', image);

  
    // Make the API request to add a new product
    fetch('http://localhost:5000/api/Product/addProduct', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Product added successfully:', data);

      alert("Product Added Successfully");
      // Close the modal
      onClose();
    })
    .catch(error => {
      console.error('Error adding product:', error);
      // Handle error if needed
    });
  };
  

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Add Product</h2>
          <button onClick={onClose} className="close-btn">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="stock">Stock:</label>
            <input
              type="text"
              id="stock"
              value={stock}
              onChange={handleStockChange}
            />
          </div>


          <div className="input-group">
            <label htmlFor="stock">ImageType</label>
            <input
              type="text"
              id="imageType"
              value={imageType}
              onChange={handleImageType}
            />
          </div>


          <div className="input-group">
            <label htmlFor="weight">Weight:</label>
            <input
              type="text"
              id="Weight"
              value={weight}
              onChange={handleWeight}
            />
          </div>

        





          <div className="input-group">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleSubmit} className="add-btn">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
