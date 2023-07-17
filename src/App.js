import { useState } from "react"
import Header from "./components/Header"
import InputSection from "./components/InputSection"
import WeatherSection from "./components/WeatherSection"

const App = () => {

  const [infoTxt, setInfoTxt] = useState('')
  const [city, setCity] = useState('')
  const [id, setId] = useState('')
  const [country, setCountry] = useState('')
  const [description, setDescription] = useState('')
  const [temp, setTemp] = useState()
  const [feelsLike, setFeelsLike] = useState()
  const [humidity, setHumidity] = useState()
  const [imgSrc, setImgSrc] = useState()
  const [activeClass, setActiveClass] = useState(false);

  const locationBtn = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        alert("Your browser not support geolocation api");
    }
  }

  const onSuccess = (position) => {
    const {latitude, longitude} = position.coords;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=93fe443621585819da0836b2667c0578`;
    fetchData(api);
  }

function onError(error){
    setInfoTxt(error.message);
}

  function requestApi(city){
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=93fe443621585819da0836b2667c0578`;

    fetchData(api);
  }

  function fetchData(api){
    setInfoTxt("Getting weather details...")
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
        setInfoTxt("Something went wrong");
    });
  }

  function weatherDetails(info){
    console.log(info)
    if(info.cod === "404"){ 
        setInfoTxt("This isn't a valid city name");
    }
    else{
    setCity(info.name);
      setCountry(info.sys.country);
      setDescription(info.weather[0].description);
      setId(info.weather[0].id);
      setTemp(Math.floor(info.main.temp));
      setFeelsLike(Math.floor(info.main.feels_like));
      setHumidity(info.main.humidity); 
      setInfoTxt("");
      setActiveClass(true);
    }
}

  const backBtn = () => {
    setActiveClass(false);
  }
  
  return (
    <div className={activeClass ? "wrapper active" : "wrapper"}>
      <Header backBtn={backBtn}/>
      <InputSection requestApi={requestApi} locationBtn={locationBtn} infoTxt={infoTxt}/>
      <WeatherSection city={city} country={country} temp={temp} description={description} feelsLike={feelsLike} humidity={humidity} imgSrc={imgSrc} id={id}/>
    </div>
  )
}
export default App