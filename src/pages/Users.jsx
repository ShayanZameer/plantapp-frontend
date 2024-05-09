import SideBar from "../components/sidebar/Sidebar";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { IoIosArrowDown } from "react-icons/io";
import "./users.scss";
import { Top } from "../components/bodysection/Top";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

import EditUserModal from "../components/Edituser";


import { useState,useEffect } from "react";


// const BASE_URL = require('./config');

// import {BASE_URL} from "../../backend/config";

// import { BASE_URL } from '/backend/config.js';

import { BASE_URL } from "../config.jsx";



// const API_ENDPOINT = `${BASE_URL}/api/auth/users`;

const Users = () => {

  // console.log("BAse is ",BASE_URL);


  const [usersData, setUsersData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedUser, setSelectedUser] = useState(null);




  useEffect(() => {
    // Fetch data from your API endpoint
    fetch(`${BASE_URL}/api/auth/users`)
      .then(response => response.json())
      .then(data => setUsersData(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  



  const handleDeleteUser = (userId) => {

    userId = String(userId);


    console.log("userId is ",userId);
    // Make a DELETE request to delete the user
    fetch(`http://localhost:5000/api/auth/deleteUser/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers as needed
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      console.log('User deleted successfully');
      // Perform any additional actions after successful deletion
    })
    .catch(error => {
      console.error('Error deleting user:', error);
      // Handle error
    });
  };


  const handleEditUserSubmit = (editedUser) => {
    console.log("id of edited user is", editedUser._id );
    fetch(`${BASE_URL}/api/auth/editUser/${editedUser._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedUser)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to edit user');
      }
      console.log('User edited successfully');
      // Close the modal after editing
      setIsModalOpen(false);
      // Perform any additional actions after successful edit
    })
    .catch(error => {
      console.error('Error editing user:', error);
      // Handle error
    });
  };




  const Productdetails = ({item}) =>{
    return(
      <>
      <div className="userdescription">
      <div className="useriddescription">
        <p className="useriddescription">{item._id}</p>
      </div>
      <div className="usernamedescription">
        <p className="usernamedescription">{item.name}</p>
      </div>
      <div className="useremaildescription">
        <p className="useremaildescription">{item.email}</p>
      </div>
      <div className="userroledescription">
        <p className="userroledescription">{item.role} 
        </p>
        <IoIosArrowDown className="icon userroleicon" />
      </div>
      <div className="useractiondescription">
        <p className="actiondescription">
        <MdDelete onClick={() => handleDeleteUser(item._id)} className="icon userdeleteicon" />
        </p>

        <p className="actiondescription">
        <CiEdit onClick={() => handleEditUser(item)} style={{color:"black",marginLeft:-20}} className="icon userdeleteicon"/>
        </p>
      </div>
     
      </div>
      <div className="line"></div>
      
      </>
      
    )
  }



  return (
    <div className="container">
      <SideBar />

      <div className="mainContent">
        <Top />

        <div className="bottom flex">
          <div className="userbody">
            <div className="usertop">
              <h1 className="userheading">Users</h1>
            </div>
            <div>
            <div className="users">
              <div className="userid">
                <p>User-Id</p>
              </div>
              <div className="username">
                <p>Name</p>
              </div>
              <div className="useremail">
                <p>Email</p>
              </div>
              <div className="userrole">
                <p>Role</p>
              </div>
              <div className="useraction">
                <p>Action</p>
              </div>

              {isModalOpen && (
  <EditUserModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    user={selectedUser}
    onEditUserSubmit={handleEditUserSubmit}

  />
)}              
            </div>
            {usersData.map((item) => {
              return <Productdetails item={item} />;
            })}
            </div>
            <Stack className="userpagination" spacing={2}>
      <Pagination count={10} variant="outlined" />
    </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
