import { useState, useEffect } from "react";
import WeatherMain from "./components/WeatherMain";
import LandingScreen from "./components/LandingScreen";


export default function App() {

  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  
  const [flipDisplay, setFlipDisplay] = useState(false);

  const [locationError, setLocationError] = useState(null);
  
  const options = {
    maximumAge: 0,
    enableHighAcuuracy: true,
    timeout: 9000,
  }

  // Function called if Geolocation works on device
  function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation(prevValue => ({
      ...prevValue,
      latitude,
      longitude,
    })); 

    return;
  }

  // Function called if an error was encountered
  function errorCallback(error) {
    setLocationError(error);
    return console.log("Couldn't retrieve location", error);
  }

  // Geolocation call wrapped in useEffect to prevent re-rendering
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 

  return (
    <>
      {!flipDisplay &&
        <LandingScreen 
        flipDisplay={flipDisplay} 
        setFlipDisplay={setFlipDisplay}
        />
      }

      {flipDisplay &&
        <WeatherMain  
          flipDisplay={flipDisplay} 
          setFlipDisplay={setFlipDisplay}
          localLocation={location}
          locationError={locationError}
        />
      }

    </>
  )
}
