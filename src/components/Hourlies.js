import {nanoid} from "nanoid";


export default function Hourlies({locationData}) {

  const hourlies = locationData[0].forecast.forecastday[0].hour.map((eachHour, wholeIndex) => {

    // Converts time to a human-readable format.
    const initializedDate = new Date();
    const currentTime = initializedDate.toTimeString().split(":");
    const apiTimeForEachHour = eachHour.time; // This is the time for the whole hour array
    const splitTime = apiTimeForEachHour.split(" ")[1];
    const checkApiTime = splitTime.split(":");

    let slicedHourlies;
    let sliced;
    
    slicedHourlies = locationData[0].forecast.forecastday[0].hour.slice(wholeIndex);

    // This checks when the time on our machine is the same as the one in the data and indicates it by changing the background.
    // It also starts the rendering of the Hourlies from when the current time corresponds to forecast's time. 
    // Might remove this though if user feedback suggests that it isn't useful.
    if (currentTime[0] === checkApiTime[0]) {
      sliced = slicedHourlies.map((slicedHour) => {

        // Does the same thing as the one above but I needed it in order to check if the current date and retrieved data time are the same.
        // Kept up the same variables 
        const apiTimeForSlicedHour = slicedHour.time; // This is the time for when we slice off the array we need.
        const splitTime = apiTimeForSlicedHour.split(" ")[1];
        const checkApiTimeForSlicedHour = splitTime.split(":");
        
        return (
          <div
            key={nanoid()} // Creates a unique key for each object rendered.
            className={
              `hourly-info 
              ${currentTime[0] === checkApiTimeForSlicedHour[0] 
                ? "active-hourly" 
                : ""
              }`}
          >
            <span className="hourly-info-time">{splitTime}</span>
            <img 
              src={slicedHour.condition.icon}
              alt="weather icon" 
              className="hourlies-icon" 
            />
            <span className="hourly-info-temp">{slicedHour.temp_c}º</span>
          </div>
        )
      });

    } 
  
    return sliced;

  // I will keep this so that I could revert back to the original way of displaying the whole forecast for the day if needed.
  /* return (
      <div
        key={wholeIndex}
        className={
          `hourly-info 
          ${currentTime[0] === checkApiTime[0] 
            ? "active-hourly" 
            : ""
          }`}
      >
        <span className="hourly-info-time">{splitTime}</span>
        <img 
          src={eachHour.condition.icon}
          alt="weather icon" 
          className="hourlies-icon" 
        />
        <span className="hourly-info-temp">{eachHour.temp_c}º</span>
      </div>
    ) */
  });
  
  return (
    <div className="hourlies">
      
      {hourlies}

    </div>
  )
}

