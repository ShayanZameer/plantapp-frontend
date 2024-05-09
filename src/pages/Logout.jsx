import React from 'react'
import SideBar from '../components/sidebar/Sidebar'
import { Top } from '../components/bodysection/Top'
import "./logout.scss"

const Logout = () => {
  return (
    <>
    <div className="container">
    <SideBar />
   


    <div className="mainContent">
      <Top/>
    
    <div className="bottom flex">
      <h1>logout</h1>
    </div>
  </div> 
  </div>
  </>
  )
}

export default Logout