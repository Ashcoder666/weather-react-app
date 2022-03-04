import React, { useEffect } from 'react'
import './rightbar.css'



const RightBar = ({loc}) => {

 
  


  return (
    <div className='rightbar-body'>
      <div className="brand">
    <h1>WEATHER APP</h1>
      </div>
      <div className="celsius-container">
        <div className="celsius">{loc&&loc.current.temp_c}゜</div>
        <div className="place">
          <h2>{loc&&`${loc.location.name},${loc.location.region}`}</h2>
          <p>{loc&&loc.location.localtime}</p>
        </div>
        <div >
          
          <img src={loc&&loc.current.condition.icon} alt="" className="image" />
        </div>
      </div> 
    </div>
  )
}

export default RightBar
