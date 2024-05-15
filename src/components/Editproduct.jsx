

import React, { useState, useEffect } from 'react';

const EditProduct = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    imageType: '',
    image: null
  });

  useEffect(() => {
    // Set the form data to the current product values when the component loads
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        stock: product.stock,
        imageType: product.imageType,
        image: product.image
      });
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('stock', formData.stock);
    formDataToSend.append('imageType', formData.imageType);
    if (formData.image instanceof File) {
      formDataToSend.append('image', formData.image);
    }
    onSave(product._id, formDataToSend);

    alert("Product edited successfully");
  };

  return (
    <div className="modal-overlay">
      <div className="modal" >
        <div className="modal-header">
          <h2>Edit Product</h2>
          <button onClick={onClose} className="close-btn" style={{width:"10%"}}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-body">
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="stock">Stock:</label>
            <input
              type="text"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="imageType">Image Type:</label>
            <input
              type="text"
              id="imageType"
              name="imageType"
              value={formData.imageType}
              onChange={handleInputChange}
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
            {formData.image && typeof formData.image === 'string' && (
              <img style={{height: 80,width: 100 }} src={formData.image} alt="Current Product"  />
            )}
          </div>
          <div className="modal-footer">
            <button type="submit" className="save-btn">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
