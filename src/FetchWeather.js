 
 import axios from "axios";

 const API_KEY="5e8c59ccdd30105795d267b6104b1bc0"
 const URL="https://api.openweathermap.org/data/2.5/weather"

 const FetchWeather=async (query)=>{
     let data=  await axios.get(URL,{
        params:{
             q:query, //city name
            units:"metric",
            APPID:API_KEY
        }   
       })
       return data
 }
 export default FetchWeather;