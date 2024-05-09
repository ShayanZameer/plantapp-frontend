import React, { useState } from 'react';
import Modal from 'react-modal';
import './EditUserModal.scss'; // Import CSS file for styling

const EditUserModal = ({ isOpen, onClose, user, onEditUserSubmit }) => {
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare the edited user object
    const editedUser = {
      _id: user._id,
      email: email,
      name: name,
      role: role
    };

    // Call the onEditUserSubmit function with the edited user data
    onEditUserSubmit(editedUser);

    // Close the modal after submitting
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit User Modal"
      className="edit-user-modal" // Apply custom class for styling
      overlayClassName="edit-user-modal-overlay" // Apply custom class for overlay styling
      ariaHideApp={false} // Disable ariaHideApp to prevent accessibility issues
      shouldCloseOnOverlayClick={true} // Close modal when clicking outside
      shouldCloseOnEsc={true} // Close modal when pressing ESC key
    >
      <div className="modal-content">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="objectId">Object Id:</label>
            <input
              type="text"
              id="objectId"
              value={user._id}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="button-group">
            <button style={{marginRight:3}} type="submit" className="btn btn-primary">Save</button>
            <button style={{marginLeft:-3 ,marginTop:10}} type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditUserModal;
