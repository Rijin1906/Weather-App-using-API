// imported Images and css files from folder
import "./css/card.css";
import Clear from "./assets/images/clear.png";
import Clouds from "./assets/images/clouds.png";
import Drizzle from "./assets/images/drizzle.png";
import Mist from "./assets/images/mist.png";
import Rain from "./assets/images/rain.png";
import Snow from "./assets/images/snow.png";
import React from "react";

function Card(props) {
  return (
    <div>
      <div className="weather-card">
        <div className="weather-card-image">
          {" "}
          <img
            src={
              props.sun === "Rain" ? Rain :
              props.sun === "Clouds" ? Clouds :
              props.sun === "Drizzle" ? Drizzle :
              props.sun === "Clear" ? Clear :
              props.sun === "Snow" ? Snow :
              props.sun==="Mist" ? Mist:
              Clouds
            }
          ></img>
        </div>
        <div className="weather-card-details">
          <div className="weather-temp">{props.temp}°C
          <div className="weather-city-name">{props.wind}Km/h</div></div>
          <div className="weather-city-name">{props.cityName}</div>

        </div>
      </div>
    </div>
  );
}
export default Card;
