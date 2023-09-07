import { useState, useEffect } from "react";
import axios from "axios";
import Weeklies from "./Weeklies";
import Hourlies from "./Hourlies";
import searchIcon from "../assets/search1.svg";
import rainy from "../assets/cloudy-rain.svg";
import humidity from "../assets/thermometer1.svg";
import wind from "../assets/wind.svg";
import localData from "./localData.json";


export default function WeatherMain({localLocation, locationError}) {

  const [locationData, setLocationData] = useState(null);

  const [foreignLocation, setForeignLocation] = useState({
    search: "",
  });

  console.log("This is location data", locationData);

  const [countOnLocationChange, setCountOnLocationChange] = useState(0);

  const [flipDisplay, setFlipDisplay] = useState(false);

  const [weatherMainError, setWeatherMainError] = useState(null);

  const API_KEY = "1d1cc4d07aae4026877235446232708";

  const localUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${localLocation.latitude},${localLocation.longitude}&hours=24&days=7`;
  
  
  const foreignUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${foreignLocation.search}&hours=24&days=7`;


  function displayScreen() {
    setFlipDisplay(!flipDisplay);
  }


  // Detects change in the value of the search box.
  function handleChange(e) {
    const {name, value} = e.target; 
    setForeignLocation(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  }


  // Called when the user clicks on the search button.
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted", foreignLocation);
    setCountOnLocationChange(prevValue => prevValue + 1);
  }


  // Function called for when the user initially uses the app.
  // It uses the user's location data.
  function fetchDataForLocal() {
    axios.get(localUrl)
      .then(response => {
        console.log("This is data", response.data);
        setLocationData([response.data]);
        // setForeignLocation(prevValue => ({
        // ...prevValue,
        //  search: `${locationData[0].location.name}`,
        // }))
      })
      .catch((weatherMainError) => {
        if (weatherMainError.response) {
          console.log("For weatherMainError.response");
          console.log(weatherMainError.response.data);
          console.log(weatherMainError.response.status);
          console.log(weatherMainError.response.headers);
        }
        else if (weatherMainError.request) {
          console.log(weatherMainError.message);
          setWeatherMainError(weatherMainError.message  + ". Check your network settings and reload the page.");
        }
        else {
          console.log("Error:", weatherMainError);
        }
        // setWeatherMainError(response.data.weatherMainError.message);
      })
  }
 

  // Function for when the user searches for a location using the search box.
  function fetchDataForForeign() {
    axios.get(foreignUrl)
      .then(response => {
        console.log(response);
        setLocationData([response.data]); 
      }) 
      .catch((error) => {
        if (error.response) {
          // console.log("For weatherMainError.response");
          // console.log(weatherMainError.response.data.weatherMainError.message);
          if (error.response.data.error.message === "Parameter q is missing.") {
            setWeatherMainError("No input given. Please reload the page and try again.");
          }
          else {
            setWeatherMainError(error.response.data.error.message);
          }
          
          // console.log(weatherMainError.response.status);
        }
        else if (error.request) {
          // console.log(weatherMainError.message);
          if (error.message === "Network Error") {
            setWeatherMainError(error.message + ". Check your network settings and reload the page.");
          }
          else {
            setWeatherMainError(error.message);
          }
        }
        else {
          // console.log("Error:", weatherMainError);
        }
      })     
  }


  // Fetches data for the local location of the user.
  useEffect(() => {
    if (!locationData) {
      fetchDataForLocal();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  })


  // Fetches data for the new location the user enters into the search box.
  useEffect(() => {
    if (countOnLocationChange) {
      fetchDataForForeign();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countOnLocationChange]) 


  // Checks if we couldn't get the user's location from the Geolocation API and throws an error.
  if (locationError) {
    return <h3>Couldn't fetch your location. Please check your network and location settings and try reload the page.</h3>
  }

  // Checks if there is any error arising from calling the API which are handled in the fetchLocalData and fetchForeign Data functions.
  if (weatherMainError) {
    return <h3>{weatherMainError}</h3>
  }

  // Checks to see if we don' thave data in our location data state yet and informs the user about it.
  // Also helps to stop React from throwing an error on mount since no data is available and we need it in rendering. So, on state change, the data is available and this if block is not rendered.
  if (!locationData) {
    return "Please wait. Fetching data...";
  }


  const weatherElems = locationData.map((val, index) => {
    // Convert time to a human-readable format
    const time = new Date();
    const convertedTime = time.toUTCString()
    .split(" ").slice(0, 4);
    const splitTime = convertedTime.join(" ");

    return (
      <div 
        className="main-screen" 
        key={index}
      >
        <form>
          <button
            className="submit-btn"
            onClick={handleSubmit}
          >
            <img 
              src={searchIcon}
              alt="search icon"
              className="search-icon"
            />
          </button>

          <input 
            type="search"
            className="input-box"
            placeholder="Search for a city"
            onChange={handleChange}
            name="search"
            value={foreignLocation.search}
          />
        </form>

        <div className="location-date">
          <span className="location">{val.location.name}</span>
          <span className="date">{splitTime}</span>
        </div>

        <img 
          src={val.current.condition.icon}
          alt="weather pic"
          className="main-weather-img"
        />

        <h1 className="main-weather-temp">{val.current.temp_c}º</h1>

        <h3 className="main-weather-desc">{val.current.condition.text}</h3>

        <div className="additional-info">
          <div className="info-card">
            <img 
              src={rainy}
              alt="weather icon"
              className="info-card--icon"
            />

            <span className="info-card--value">{val.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
            <span className="info-card--text">Rain</span>

          </div>

          <div className="info-card">
            <img 
              src={humidity}
              alt="weather icon"
              className="info-card--icon"
            />

            <span className="info-card--value">{val.current.humidity}%</span>
            <span className="info-card--text">Humidity</span>

          </div>

          <div className="info-card">
            <img 
              src={wind}
              alt="weather icon"
              className="info-card--icon"
            />

            <span className="info-card--value">{val.current.wind_kph}kph</span>
            <span className="info-card--text">Wind</span>

          </div>
        </div>

        <section className="bottom-info">
          <div className="hourly-weekly">
            <span className="hourly-active">
              Today
            </span>
            <span onClick={displayScreen} className="full-report-link">View full report</span>
          </div>

          <Hourlies locationData={locationData}/>
        </section>
            
      </div>
    ) 
  });

  
  return (
    <>

      {!flipDisplay && 
        weatherElems
      }
    
      {flipDisplay && 
        <Weeklies
          flipDisplay={flipDisplay}
          setFlipDisplay={setFlipDisplay} 
          locationData={locationData}
        />
      }

    </>
  )
}
