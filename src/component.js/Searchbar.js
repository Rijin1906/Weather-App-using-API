import axios from "axios";
import Card from "./Card";
import { useState } from "react";
import "./css/card.css";
import i1 from "./assets/images/clouds.png";
import React from "react";

// importing Css file
import "./css/searchBar.css";

function SearchBar() {
  const api = {
    key: "d75522cf4dbe5539751b196d834fcb3f",
  };

  const [city_name, setCityName] = useState("");
  const [city_name1, setCityName1] = useState("____");
  const [city_temp, setCityTemp] = useState("0");
  const [city_wind, setCityWind] = useState("0");
  const[ city_sun, setCitySun]= useState("")
  // When searched button is pressed
  const searchPressed = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api.key}`
      )
      .then((x) => {
        console.log(x.data);
        setCityName1(x.data.name);
        console.log(setCityName1);
        let variable = Math.round(x.data.main.temp - 273.15)
        setCityTemp(variable);
        console.log(city_temp);
        console.log(x.data.wind.speed);
        setCityWind(x.data.wind.speed);
        console.log(x.data.weather[0].main);
        setCitySun(x.data.weather[0].main);
      })
      .catch((y)=>{
        console.log("Invalid data");
      });
  };
  return (
    <div>
      <div className="searchBar-container">
        <div className="searchBar-input">
          {" "}
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => {
              setCityName(e.target.value);
            }}
          ></input>
        </div>
        <div className="searchBar-button">
          <button onClick={searchPressed}> SEARCH</button>
        </div>
      </div>
      <Card  temp ={city_temp} cityName={city_name1} sun={city_sun} wind={city_wind}/>
    </div>
  );
}
export default SearchBar;
