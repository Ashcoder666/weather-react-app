import React from 'react'
import './rightbar.css'



const RightBar = ({loc}) => {

 
  


  return (
    <div className='rightbar-body'>
      <div className="brand">
    <h1>devops</h1>
      </div>
      <div className="celsius-container">
        <div className="celsius">{loc&&loc.current.temp_c}°C</div>
        <div className="place">
          <h2>{loc?loc.location.name:<p>Allow Location Access</p>}</h2>
          <h3>{loc&&loc.location.region}</h3>
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
