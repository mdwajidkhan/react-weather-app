import { useState, useEffect } from 'react';
import clear from '../icons/clear.svg';
import cloud from '../icons/cloud.svg';
import haze from '../icons/haze.svg';
import rain from '../icons/rain.svg';
import snow from '../icons/snow.svg';
import storm from '../icons/storm.svg';

const WeatherSection = ({city, country, temp, description, feelsLike, humidity, id}) => {

  const [icon, setIcon] = useState()

  useEffect(() => {
    if(id === 800){
    setIcon(clear);
  }
  else if(id >= 200 && id <= 232){
    setIcon(storm); 
  }
  else if(id >= 600 && id <= 622){
    setIcon(snow);
  }
  else if(id >= 701 && id <= 781){
    setIcon(haze);
  }
  else if(id >= 801 && id <= 804){
    setIcon(cloud);
  }
  else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
    setIcon(rain);
  }
},[id]);

  return (
    <section className="weather-part">
        <img src={icon} alt="Weather Icon"/>
        <div className="temp">
          <span className="numb">{temp}</span>
          <span className="deg">°</span>C
        </div>
        <div className="weather">{description}</div>
        <div className="location">
          <i className='bx bx-map'>🧭</i>
          <span>{city}, {country}</span>
        </div>
        <div className="bottom-details">
          <div className="column feels">
            <i className='bx bxs-thermometer'>🌡</i>
            <div className="details">
              <div className="temp">
                <span className="numb-2">{feelsLike}</span>
                <span className="deg">°</span>C
              </div>
              <p>Feels like</p>
            </div>
          </div>
          <div className="column humidity">
            <i className='bx bxs-droplet-half'>💧</i>
            <div className="details">
              <span>{humidity}%</span>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WeatherSection