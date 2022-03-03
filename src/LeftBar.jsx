import React from 'react'
import './leftbar.css'
import SearchIcon from '@material-ui/icons/Search';

const LeftBar = () => {
  return (
    <div className='leftbar-body'>
      <div className="input">
        <input placeholder='Another location' />
      <div className="search-icon">
      <SearchIcon />
      </div>
      </div>





    
     
      <div className="suggested-places">
        <p>washimgton</p>
        <p>newyork</p>
        <p>california</p>
        <p>sanfrasisco</p>
      </div>

      
      <hr className='hr' />

       
      <div className="wet-details">
        <h1  >weather deatails</h1>
       
       <div className='wd-subdiv'>
       <p>something</p>
        <p>something</p>
        <p>something</p>
        <p>something</p>
       </div>
        
        
      </div>
      <hr className='hr' />
    </div>
  )
}

export default LeftBar
