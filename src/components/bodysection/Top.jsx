import React from "react";

import "./top.scss";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import profile from "../../assets/profile.jpeg";

export const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to PlantCare</h1>

          <p>Hi Fahad, Welcome Back!</p>
        </div>
        <div className="searchBar flex">
          <input style={{padding:10, marginTop:10}} type="text" placeholder="Search here" />
          <IoIosSearch style={{ marginRight:15, marginTop:-3}} className="icon" />
        </div>
        <div className="adminDiv flex">
          <IoMdNotificationsOutline className="icon" />
          <div className="adminImage">
            <img src={profile} alt="admin image" />
          </div>
        </div>
      </div>
    </div>
  );
};
