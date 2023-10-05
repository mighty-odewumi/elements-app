// This component will contain the full day's hourly forecast without any slice so that the user can see the weather before the particular time and after.
// This wouldn't have been needed if I could get the current time to display as the first element the user sees at the hourlies section but had to resolve to this.

export default function Hourlies({locationData, hourliesStyles}) {

  const hourlies = locationData[0].forecast.forecastday[0].hour.map((eachHour, wholeIndex) => {

    // Converts time to a human-readable format.
    const initializedDate = new Date();
    const currentTime = initializedDate.toTimeString().split(":");
    const apiTimeForEachHour = eachHour.time; // This is the time for the whole hour array
    const splitTime = apiTimeForEachHour.split(" ")[1];
    const checkApiTime = splitTime.split(":");

    return (
      <div
        key={wholeIndex}
        style={hourliesStyles}
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
    ) 
  });
  
  return (
    
    <div className="hourlies">
      
      {hourlies}

    </div>
  )
}
