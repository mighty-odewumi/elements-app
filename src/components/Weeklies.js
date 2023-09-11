import HourliesFull from "./HourliesFull";
import backIcon from "../assets/back-btn1.svg";
import {nanoid} from "nanoid";

export default function Weeklies({flipDisplay, setFlipDisplay, locationData}) {

  // Responsible for switching between the main screen and the weeklies display.
  function displayScreen() {
    setFlipDisplay(!flipDisplay);
  }

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

        <HourliesFull locationData={locationData}/>

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
      <div className="weeklies">

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
