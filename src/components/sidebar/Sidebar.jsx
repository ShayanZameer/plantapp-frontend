import React from 'react'
import logo from "../../assets/logo.png"
import { IoMdSpeedometer } from "react-icons/io"; 
import { MdDeliveryDining } from "react-icons/md"; 
import { BsTrophy } from "react-icons/bs";           
import { IoPersonOutline } from "react-icons/io5";
import { BiPieChartAlt } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import "./sidebar.scss"
import { Link } from 'react-router-dom';
import { RiLogoutCircleLine } from "react-icons/ri";



const SideBar = () => {



  return (
    <div className='sidebar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt="Image name" />
        <h2>plantCare</h2>
      </div>


      <div className="menuDiv">
        <h3 className="divTitle">
          Quick Menu
        </h3>
        <ul className="menuLists grid">
          <li style={{
            backgroundColor:location.pathname.includes("/dashboard")?"hsl(96, 75%, 89%)":"white",
            borderRadius:location.pathname.includes("/dashboard")?"10px":"0",
            
            
          }} className='listItem'>
            <Link style={{
            color:location.pathname.includes("/dashboard")?"hsl(94, 59%, 35%)":"hsl(240, 1%, 48%)",
            
          }} to={"/dashboard"} className='menuLink flex'>
            <IoMdSpeedometer  className='icon'/>
            <span style={{ 
            padding:location.pathname.includes("/dashboard")?".5rem":"0",
            
            
            
          }}  className='smallText'>
            Dashboard
            </span>
            </Link>
          </li>

          <li  style={{
            backgroundColor:location.pathname.includes("/admin/orders")?"hsl(96, 75%, 89%)":"white",
            borderRadius:location.pathname.includes("/admin/orders")?"10px":"0",
          }}
            
           className='listItem'>
            <Link style={{
            color:location.pathname.includes("/admin/orders")?"hsl(94, 59%, 35%)":"hsl(240, 1%, 48%)",
            
          }} to={"/admin/orders"} className='menuLink flex'>
            <MdDeliveryDining  className='icon'/>
            <span style={{
            
            padding:location.pathname.includes("/admin/orders")?".5rem":"0",
          }}  className='smallText'>
            Orders
            </span>
            </Link>
          </li>

          <li style={{
            backgroundColor:location.pathname.includes("/admin/products")?"hsl(96, 75%, 89%)":"white",
            borderRadius:location.pathname.includes("/admin/products")?"10px":"0",
          }} className='listItem'>
            <Link style={{
            color:location.pathname.includes("/admin/products")?"hsl(94, 59%, 35%)":"hsl(240, 1%, 48%)",
          }} to={"/admin/products"} className='menuLink flex'>
            <BsTrophy  className='icon'/>
            <span style={{
            
            padding:location.pathname.includes("/admin/products")?".5rem":"0",
          }} className='smallText'>
            Products
            </span>
            </Link>
          </li>

          <li style={{
            backgroundColor:location.pathname.includes("/admin/users")?"hsl(96, 75%, 89%)":"white",
            borderRadius:location.pathname.includes("/admin/users")?"10px":"0",
          }} className='listItem'>
            <Link style={{
            color:location.pathname.includes("/admin/users")?"hsl(94, 59%, 35%)":"hsl(240, 1%, 48%)",
          }} to={"/admin/users"} className='menuLink flex'>
            <IoPersonOutline className='icon'/>
            <span style={{
            
            padding:location.pathname.includes("/admin/users")?".5rem":"0",
          }} className='smallText'>
            Users
            </span>
            </Link>
          </li>
        </ul>
      </div>



      <div className="settingsDiv">
        <h3 className="divTitle">
          Analytics
        </h3>
        <ul className="menuLists grid">
          <li style={{
            backgroundColor:location.pathname.includes("/admin/charts")?"hsl(96, 75%, 89%)":"white",
            borderRadius:location.pathname.includes("/admin/charts")?"10px":"0",
          }} className='listItem'>
            <Link style={{
            color:location.pathname.includes("/admin/charts")?"hsl(94, 59%, 35%)":"hsl(240, 1%, 48%)",
          }} to={"/admin/charts"} className='menuLink flex'>
            <BiPieChartAlt className='icon' />
            <span style={{
            
            padding:location.pathname.includes("/admin/charts")?".5rem":"0",
          }} className='smallText'>
            Charts
            </span>
            </Link>
          </li>
          
        </ul>
      </div>






      <div className='logoutdiv'>
      <RiLogoutCircleLine   className='icon logouticon' />
        <p className='logoutbutton'>Logout</p>
        

      </div>


      <div className="sidebarCard">
      <BsInfoCircle className='icon'/>

      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <button className='btn'>More About plantCare</button>
      </div>

      </div>
    </div>
  )
}

export default SideBar












