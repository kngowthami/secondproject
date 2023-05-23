import { useState } from "react";
import FetchWeather from "./FetchWeather";
function App(){
    const [query,setQuery]=useState("")
    const [weather,setWeather]=useState({})
    const change=(e)=>{
        console.log(e.target.value)
        setQuery(e.target.value)
    }
     const search=async (e)=>{
        if(e.code === "Enter"){
      let {data}= await FetchWeather(query)
      setWeather(data)
    } 
     }
    return(
        <div>
            <input type="text"  value={query} onChange={change} onKeyPress={search} placeholder="Enter city name" />
         {/* fetch data */}
          {weather.main &&
         <div className="weather_data">
            <div id="city">
                {weather.name}
                <span>{weather.sys.country}</span>
            </div>
            <div id="temp">
               {Math.round(weather.main.temp)} <span>&deg;C</span>
            </div>
            <div id="info">
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon }@2x.png`}/>
                {weather.weather[0].description}
            </div>
            <div id="pressure">
                {weather.main.pressure} mbars
            </div>
             <div id="humidity">{weather.main.humidity } hrs</div>
             <div id="wind">{weather.wind.speed} km/h</div>
         </div>
} 
        </div>
    )
}
export default App; 