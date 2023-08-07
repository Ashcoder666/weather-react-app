import './app.css'
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import React, { useEffect } from 'react';
import axios from 'axios';


function App() {
  const [lat,setLat] =React.useState(null)
  const [loc,setLoc] = React.useState(null)

const getgeo =()=>{
  console.log("useeffect started")
  navigator.geolocation.getCurrentPosition(p=>{
    setLat(`${p.coords.latitude},${p.coords.longitude}`)
  })
  console.log("first useEffect ended")

}

 useEffect(()=>{
  getgeo()
 },[])

console.log("hi")

 useEffect(()=>{
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: lat},
    headers: {
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      'x-rapidapi-key': 'c256ecdf6emshcedc5242d337c13p19a862jsnee79af877651'
    }
  };

  promise().then(()=>{
    axios.request(options).then(function (response) {
      console.log(response.data);
      setLoc(response.data)
    }).catch((e)=>alert("check your spelling or try another place"))
  }).catch(function (error) {
    console.error(error);
    alert("allow your location access")
  });




 },[lat])


  
 var promise =()=>{
  return new Promise((resolve,reject)=>{
  if(lat){ 

   resolve(console.log("count value is true")) 
  }else{
    reject(console.log("errrrrorrrr"))
  }
})}


 const placeonclick = (city)=>{
   setLat(city)
 }
   


  return (
    
    <div className="homepage-body">
      
     <RightBar loc={loc}   /> 
     <LeftBar  loc={loc} placeOnclick={placeonclick} getgeo={getgeo}/> 
    
    </div>
  );
}

export default App;
