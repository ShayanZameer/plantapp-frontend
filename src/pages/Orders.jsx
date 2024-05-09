import React from "react";
import SideBar from "../components/sidebar/Sidebar";
import { FaPlus } from "react-icons/fa6";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./orders.scss";
import { Top } from "../components/bodysection/Top";

import { useState,useEffect } from "react";


// const BASE_URL = require('./config');

// import {BASE_URL} from "../../backend/config";

import { BASE_URL } from '/backend/config.js';


const Orders = () => {


  


  const [orders, setOrders] = useState([]);






  useEffect(() => {
    // Fetch data from your API endpoint
    fetch(`${BASE_URL}/api/Order/myOrders`)
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);



  console.log("orders are", orders );








  


  // const Productdetails = ({item}) =>{
  //   return(
  //     <>
  //     <div className="productdescription">
  //     <div className="productphotodescription">
  //     <p>{item.date}</p>
  //           </div>
  //     <div className="productnamedescription">
  //       <p>{item.name}</p>
  //     </div>
  //     <div className="productpricedescription">
  //       <p>${item.price}</p>
  //     </div>
  //     <div className="productstockdescription">
  //       <p>{item.stock}</p>
  //     </div>
  //     <div className="productactiondescription">
  //       <p className="actiondescription">Manage</p>
  //     </div>
     
  //     </div>
  //     <div className="line"></div>
      
  //     </>
      
  //   )
  // }
  const Productdetails = ({ item }) => {
    return (
      <>
        <div className="productdescription">


        <div className="productnamedescription">
            <p>{item.orderNo}</p>
          </div>
          <div className="productphotodescription">
            <p>{item.orderDate}</p>
          </div>
          
          <div className="productpricedescription">
            <p style={{marginLeft:30}}>${item.saleAmount}</p>
          </div>
          <div className="productstockdescription">
            <p>{item.paymentMethod}</p>
          </div>
          <div className="productstockdescription">
            <p>{item.status}</p>
          </div>
          
          <div className="productactiondescription">
            <p className="actiondescription">Manage</p>
          </div>
        </div>
        <div className="line"></div>
      </>
    );
  };
  


  return (
    <div className="container">
      <SideBar />

      <div className="mainContent">
        <Top />

        <div className="bottom flex">
          <div className="orderbody">
            <div className="ordertop">
              <h1 className="orderheading">Orders</h1>
            </div>
            <div>
            <div className="orders">



            <div className="productname">
                <p>orderNo</p>
              </div>
              <div className="orderdate">
                <p>Date</p>
              </div>
              
              <div className="productprice">
                <p>Sale Amount</p>
              </div>
              <div className="paymentmethod">
                <p>Payment Method</p>
              </div>
              
              <div className="orderstatus">
                <p>Status</p>
              </div>



              

              
            </div>
            {orders.map((item) => {
              return <Productdetails item={item} />;
            })}
            </div>
            <Stack className="orderpagination" spacing={2}>
      <Pagination count={10} variant="outlined" />
    </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
