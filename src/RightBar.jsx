import React from 'react'
import './rightbar.css'
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const RightBar = () => {
  return (
    <div className='rightbar-body'>
      <div className="brand">
    <h1>WEATHER APP</h1>
      </div>
      <div className="celsius-container">
        <div className="celsius">08゜</div>
        <div className="place">
          <h2>London</h2>
          <p>6:09 sunday</p>
        </div>
        <div >
          <WbSunnyIcon className="image"/>
        </div>
      </div> 
    </div>
  )
}

export default RightBar
