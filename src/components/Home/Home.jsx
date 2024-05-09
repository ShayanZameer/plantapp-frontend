import React from "react";
import SideBar from "../sidebar/Sidebar";
import Body from "../bodysection/Body";
import "../../styles/app.scss";
import Dashboard from "../../pages/Dashboard";



const Home = () => {
  return (
    <div className="container">
      <SideBar />
      <Body/>
      
      
      
    </div>
  );
};

export default Home;
