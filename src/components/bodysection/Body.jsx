import React from 'react'
import "./body.scss"
import "../../styles/app.scss"
import { Top } from './Top'
import Dashboard from '../../pages/Dashboard'

const Body = () => {
  return (
    <div className="mainContent">
        <Top/>
      
      <div className="bottom flex">
        <Dashboard/>
      </div>
    </div>
  )
}

export default Body