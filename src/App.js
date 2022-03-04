import './app.css'
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import React, { useEffect } from 'react';
import Loading from './Loading';
import axios from 'axios';

function App() {
  const [lat,setLat] =React.useState(null)
  const [long,setLong] = React.useState(null)
  const [loc,setloc] = React.useState(null)

 

 
  



    
   useEffect(()=>{


      
  const getweather =  () =>{
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: {q: `${lat},${long}`},
      headers: {
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        'x-rapidapi-key': 'c256ecdf6emshcedc5242d337c13p19a862jsnee79af877651'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setloc(response.data)
    }).catch(function (error) {
      console.error(error);
    });};

var promise = new Promise((resolve,reject)=>{
  if(navigator.geolocation.getCurrentPosition){
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(
          setLat(position.coords.latitude),
  setLong(position.coords.longitude)
        )
      });

  }else{
    reject(alert("error"))
  }
})
    
      promise.then(()=>{
  getweather()
})
      
 
                  
   },[])

 

  return (
    
    <div className="homepage-body">
      
    {lat?<> <RightBar loc={loc}  /> <LeftBar /> </> : <Loading />}  
    
    </div>
  );
}

export default App;
