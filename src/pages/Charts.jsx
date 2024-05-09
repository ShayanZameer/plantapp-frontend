import React from 'react'
import { Top } from '../components/bodysection/Top'
import SideBar from '../components/sidebar/Sidebar'
import "./charts.scss"
const Charts = () => {
  return (
    <>
    <div className="container">
    <SideBar />
   


    <div className="mainContent">
      <Top/>
    
    <div className="bottom flex">
      <h1>charts</h1>
    </div>
  </div> 
  </div>
  </>
  )
}

export default Charts