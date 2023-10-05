import HourliesFull from "./HourliesFull";
import backIcon from "../assets/back-btn1.svg";
import {nanoid} from "nanoid";
import { useEffect } from "react";

export default function Weeklies({
  flipDisplay, 
  setFlipDisplay, 
  locationData, 
  hourliesStyles,
  changeBackgroundStyles,
  isToggled,
  setCountFlip,
  }) {


  // Responsible for switching between the main screen and the weeklies display.
  function displayScreen() {
    setFlipDisplay(!flipDisplay);
    setCountFlip(prevValue => prevValue + 1);
  }


  const pageWidth = window.innerWidth;
  const maxWidthNeeded = 500;
  const checkPageWidth = pageWidth <= maxWidthNeeded;
  let pageBody = document.querySelector("body");

  useEffect(() => {
    const weekliesScreen = document.getElementById("weeklies");
    // console.log(weekliesScreen);
    
    if (isToggled && checkPageWidth === false) {
      weekliesScreen.style.backgroundColor = "white";
      weekliesScreen.style.color = "black";
      pageBody.style.backgroundColor = "black";
      pageBody.style.color = "black";
    }

    else if (isToggled === false && checkPageWidth === false) {
      weekliesScreen.style.backgroundColor = "black";
      weekliesScreen.style.color = "white";
      pageBody.style.backgroundColor = "white";
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isToggled])

  const weeklies = locationData.map((value, index) => {
    // Remove the first day off the list since we have it rendered above already.
    const slicedDays = value.forecast.forecastday.slice(1);

    // Convert time to a human-readable format.
    const time = new Date();
    // const convertedTime = time.toUTCString()
    //   .split(" ")
    //   .slice(0, 4);
    // const splitTime = convertedTime.join(" ");

    const convertedTime = time.toDateString(); // Changed to this to fix a subtle bug of the time being displayed with a different time offset because of the implementation of UTC.
    // console.log(convertedTime);
    

    return (
      <>
        <div 
          className="subheading-date"
        >
          <span className="subheading">Today</span>
          <span className="date">{convertedTime}</span> 
        </div>

        <HourliesFull 
          locationData={locationData}
          hourliesStyles={hourliesStyles}
        />

        <p className="subheading">Next Forecast</p>

        <section className="weekly-forecasts">

          {slicedDays.map((day, index) => {
            const date = new Date(day.date);
            const stringifiedDate = date.toDateString();
            const formattedDay = stringifiedDate.slice(0, 3);
            const formattedMonth = stringifiedDate.slice(3);
            
            return (
              <div 
                className="forecast"
                key={nanoid()}
                style={hourliesStyles}
              >
                <div className="formatted-date">
                  <span className="forecast-day">{formattedDay}</span>
                  <span className="forecast-month">{formattedMonth}</span>
                </div>
                <span className="forecast-temp">{day.day.avgtemp_c}º</span>
                <img src={day.day.condition.icon} alt="weather icon" className="forecast-icon" />
              </div>
            )
          })}

        </section>
      </>
    )
  });


  return (
    <>
      <div  
        id="weeklies" 
        style={changeBackgroundStyles}          
      >
        <button onClick={displayScreen} className="back-btn">
          <img 
            src={backIcon}
            alt="back icon"
            className="back-icon"
          />
        </button>
        
        <h1>Weekly Forecast</h1>

        {weeklies}

      </div>
    </>
  )
}
