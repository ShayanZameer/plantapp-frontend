



import React from 'react';
import "./Popup.scss";
import { FaTimes } from 'react-icons/fa';

const Popup = ({ showPopup, setShowPopup, selectedOrder, setSelectedOrder }) => {
    const handleClose = () => {
      setShowPopup(false);
      setSelectedOrder(null);
    };
  
    // const handleConfirm = () => {
    //   // Implement your logic for confirm action
    //   handleClose();
    // };


    const handleCancel = async () => {
        try {
          // Use the selectedOrder object to get the order ID
          const orderId = selectedOrder?._id;

          console.log("Canceling order ID:", orderId);  // Log the order ID

          if (!orderId) {
            alert('Order ID is missing');
            return;
          }
  
          const response = await fetch(`http://localhost:5000/api/Order/orders/${orderId}/cancel`, {
            method: 'PUT',  // Ensure that this is the correct method as per your backend implementation
            headers: {
              'Content-Type': 'application/json'
            }
          });
  
          if (!response.ok) {
            throw new Error('Failed to cancel the order');
          }
  
          const responseData = await response.json();
          alert(`Order canceled successfully:`);  // Customize message based on your API response
        } catch (error) {
          console.error('Error:', error);
          alert('There was a problem with the cancel request');
        }
        handleClose();
      };



      const handleConfirm = async () => {
        const orderId = selectedOrder?._id;
        const orderStatus = selectedOrder?.status;
        
        console.log("orderStatus is ", orderStatus);// Assuming status is a property of the selectedOrder object

        console.log("Confirming order ID:", orderId);
        if (!orderId) {
            alert('Order ID is missing');
            return;
        }if (orderStatus === 'Cancelled') {
            alert('This order has been cancelled and cannot be confirmed.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/Order/orders/${orderId}/confirm`, {
                method: 'PUT',  // Check this with your backend, it might be POST or PUT depending on your setup
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log("API Response Status:", response.status);  // Log the response status

            if (!response.ok) {
                throw new Error('Failed to confirm the order');
            }

            const responseData = await response.json();
            console.log("API Response Data:");  // Log the full response data
            alert(`Order confirmed successfully: ${responseData.message}`);
        } catch (error) {
            console.error('Error:', error);
            alert('There was a problem with the confirm request');
        }
        handleClose();
    };







  
    return (
      <div className={`popup-container ${showPopup ? 'show' : ''}`}>
        <div className="popup">
          <button className="close-button" onClick={handleClose}><FaTimes /></button>
          <div className="popup-content">
            <h2>Confirmation</h2>
            <p>Are you sure you want to manage order {selectedOrder?.orderNo}?</p>
            <div className="popup-buttons">
              <button className="cancel-order-button" onClick={handleCancel}>Cancel Order</button>
              <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Popup;



  