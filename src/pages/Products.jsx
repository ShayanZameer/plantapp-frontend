import React from "react";
import SideBar from "../components/sidebar/Sidebar";
import { FaPlus } from "react-icons/fa6";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./products.scss";
import { Top } from "../components/bodysection/Top";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import AddProduct from "../components/AddProduct";



import { useState,useEffect } from "react";

import { BASE_URL } from "../config.jsx";



const Products = () => {


  const [productsData, setproductsData] = useState([]);

  const [showAddProduct, setShowAddProduct] = useState(false); // State to track visibility of AddProduct component



  const handleDeleteProduct = (userId) => {

    // userId = String(userId);


    console.log("userId is ",userId);
    // Make a DELETE request to delete the user
    fetch(`http://localhost:5000/api/Product/deleteProduct/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers as needed
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete Product');
      }
      console.log('Product deleted successfully');
      // Perform any additional actions after successful deletion
    })
    .catch(error => {
      console.error('Error deleting Product:', error);
      // Handle error
    });
  };
  

  const showAddProductComponent = () => {
    setShowAddProduct(prevState => !prevState);
  };


  
  useEffect(() => {
    // Fetch data from your API endpoint
    fetch(`${BASE_URL}/api/Product/displayAllProducts`)
      .then(response => response.json())
      .then(data => setproductsData(data))
      .catch(error => console.error('Error fetching product data ', error));
  }, []);










  const Productdetails = ({item}) =>{
    return(
      <>
      <div className="productdescription">
      <div className="productphotodescription">
        <img className="photodescription" src={item.image} alt="Image name" />
      </div>
      <div className="productnamedescription">
        <p>{item.name}</p>
      </div>
      <div className="productpricedescription">
        <p>${item.price}</p>
      </div>
      <div className="productstockdescription">
        <p>{item.stock}</p>
      </div>
      {/* <div className="productactiondescription">
        <p className="actiondescription">Manage</p>
      </div> */}

<div className="productactiondescription">
        <p className="actiondescription">
        <MdDelete onClick={() => handleDeleteProduct(item._id)} style={{color:"red"}}  className="icon userdeleteicon" />
        </p>

        <p className="actiondescription">
        <CiEdit  style={{color:"black",marginLeft:-20}} className="icon userdeleteicon"/>
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
          <div className="productbody">
            <div className="producttop">
              <h1 className="productheading">Products</h1>
              <p className="createicon" onClick={showAddProductComponent}>
                <FaPlus className="icon createicon1" />
              </p>
            </div>

            {showAddProduct && <AddProduct onClose={() => setShowAddProduct(false)} />}
            <div>

            <div className="products">
              <div className="productphoto">
                <p>Photo</p>
              </div>
              <div className="productname">
                <p>Name</p>
              </div>
              <div className="productprice">
                <p>Price</p>
              </div>
              <div className="productstock">
                <p>Stock</p>
              </div>
              <div className="productaction">
                <p>Action</p>
              </div>

              
            </div>
            {productsData.map((item) => {
              return <Productdetails item={item} />;
            })}
            </div>
            <Stack className="productpagination" spacing={2}>
      <Pagination count={10} variant="outlined" />
    </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
