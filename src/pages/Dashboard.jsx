import React from "react";
import "./dashboard.scss";

import { useState, useEffect } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { PiUsers } from "react-icons/pi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { SlBag } from "react-icons/sl";
import { VscGraphLine } from "react-icons/vsc";
import BarChart from "../components/Dashboardcharts/BarChart";

const Dashboard = () => {




  const [totalUsers, setTotalUsers] = useState(0); 
  const[totalProducts, setTotalProducts]= useState(0);
  const [totalSales, setTotalSales]= useState(0);
  const [totalOrders, setTotalOrders]= useState(0);

  const [recentOrders, setRecentOrders] = useState([]);




  useEffect(() => {
    // Function to fetch the total number of users from the database
    const fetchTotalUsers = async () => {
      try {
        // Make an API call to fetch the total number of users
        const response = await fetch('http://localhost:5000/api/auth/totalUsers'); // Replace '/api/totalUsers' with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch total users');
        }
        const data = await response.json();
        setTotalUsers(data.totalUsers); // Update the state variable with the total number of users
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };


    const fetchRecentOrders = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/Order/firstFourOrders"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recent orders");
        }
        const data = await response.json();
        setRecentOrders(data);
      } catch (error) {
        console.error("Error fetching recent orders:", error);
      }
    };







    const fetchTotalProducts = async () => {
      try {
        // Make an API call to fetch the total number of users
        const response = await fetch('http://localhost:5000/api/Product/totalProducts'); // Replace '/api/totalUsers' with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch total Products');
        }
        const data = await response.json();
        setTotalProducts(data.totalProducts); // Update the state variable with the total number of users
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };


    const fetchTotalOrders = async () => {
      try {
        // Make an API call to fetch the total number of users
        const response = await fetch('http://localhost:5000/api/Order/totalOrders'); // Replace '/api/totalUsers' with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch total Products');
        }
        const data = await response.json();
        setTotalOrders(data.totalOrders); // Update the state variable with the total number of users
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };





    fetchTotalProducts();
    fetchTotalUsers(); 

    fetchRecentOrders();


    fetchTotalOrders();
  }, []);


  const data = [
    
    {
      name: "laptop",
      price: 3060,
      quantity: 2,
    },
    {
      name: "laptop",
      price: 3060,
      quantity: 2,
    },
    {
      name: "laptop",
      price: 3060,
      quantity: 2,
    },
    {
      name: "laptop",
      price: 3060,
      quantity: 2,
    },
    
   
    
    
  ];
  const OrderCard = ({ item }) => {
    return (
      <>
        <div className="orderdetails">
          <div className="ordernamedescription">
            <p >{item.orderNo}</p>
          </div>
          <div className="orderpricedescription">
            <p style={{marginLeft:40}}>${item.saleAmount}</p>
          </div>
          <div className="orderstatusdescription">
            <p style={{marginLeft:40}}>{item.orderDate}</p>
          </div>
        </div>
        <div className="line"></div>
      </>
    );
  };
  return (
    <>
      <div className="main">
        <div className="mainchild1">
          <div className="userDiv">
            <div className="wholediv">
            <div className="usericon">
            <PiUsers className="icon icon1" />
            </div>
            <div className="childdiv">
              <h3 className="childidvtitle">Users</h3>
              <p className="childdivlength">{totalUsers}</p>
            </div>
            </div>
          </div>
          <div className="userDiv">
            <div className="wholediv">
            <div className="usericon2">
            <SlBag className="icon icon1" />
            </div>
            <div className="childdiv">
              <h3 className="childidvtitle">Products</h3>
              <p className="childdivlength">{totalProducts}</p>
            </div>
            </div>
          </div>
          <div className="userDiv">
            <div className="wholediv">
            <div className="usericon3">
            <PiShoppingCartSimpleLight className="icon icon1" />
            </div>
            <div className="childdiv">
              <h3 className="childidvtitle">Orders</h3>
              <p className="childdivlength">{totalOrders}</p>
            </div>
            </div>
          </div>
          <div className="userDiv">
            <div className="wholediv">
            <div className="usericon4">
            <VscGraphLine className="icon icon1" />
            </div>
            <div className="childdiv">
              <h3 className="childidvtitle">Sales</h3>
              <p className="childdivlength">{totalSales}</p>
            </div>
            </div>
          </div>
          
        </div>

        <div className="bottomsection">
          <div className="mainchild2">
          <BarChart/>
          </div>

          <div className="recentorders">
            <div className="ordertopsection">
              <h3 className="ordertitle">Recent Orders</h3>
              {/* <h4 className="orderseeall">See all</h4>
              <FaArrowRight className="icon seeall" /> */}
              

              <div className="seealldiv">
              <h4 className="orderseeall">See all</h4>
              <FaArrowRight className="icon seeall" />
              </div>
              </div>
           
            <div className="orderdescription">
              <div className="ordername">
                
                <p>Order No </p>
              </div>
              <div className="orderprice">
                
                <p> Sale Amount </p>
              </div>
              <div className="orderstatus">
                
                <p>Order Date</p>
              </div>
            </div>

            {recentOrders.map((item) => {
              return <OrderCard  key={item._id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
