import React from 'react'
import './leftbar.css'
import SearchIcon from '@material-ui/icons/Search';

const LeftBar = ({loc,placeOnclick,getgeo}) => {
  const [search,setSearch]= React.useState('')
  return (
    <div className='leftbar-body'>
      <div className="input">
        <input className='search-input' placeholder='Search for another location' onChange={(e)=>{setSearch(e.target.value)}}/>
      <div className="search-icon" onClick={()=>placeOnclick(search)}>
      <SearchIcon />
      </div>
      </div>





    
      <button className='gps' onClick={()=>getgeo()}>Current Location</button>
      <div className="suggested-places">
        
        <p onClick={()=>placeOnclick("delhi")} >Delhi</p>
        <p onClick={()=>placeOnclick("mumbai")}>Mumbai</p>
        <p onClick={()=>placeOnclick("bangalore")}>Bangalore</p>
        <p onClick={()=>placeOnclick("kochi")}>Kochi</p>
      </div>

      
      <hr className='hr' />

       
      <div className="wet-details">
        <h1  >Weather Details</h1>
       
       <div className='wd-subdiv'>
       <p className='subdiv-cont' > <span>Humidity</span>  <span>{loc&&loc.current.humidity}</span></p>
       <p className='subdiv-cont' > <span>Pressure</span>  <span>{loc&&loc.current.pressure_in}</span></p>
       <p className='subdiv-cont' > <span>Wind</span>  <span>{loc&&loc.current.wind_kph}</span></p>
       <p className='subdiv-cont' > <span>Feels Like</span>  <span>{loc&&loc.current.feelslike_c}</span></p>
        
       </div>
        
        
      </div>
      <hr className='hr' />
    </div>
  )
}

export default LeftBar
