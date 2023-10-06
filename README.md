# Elements (Weather App) 

Built this project from scratch using React and CSS. This app fetches weather data from the WeatherAPI site. View screenshots for the [main screen](src/assets/screenshot1.png) and the [weekly forecast screen](src/assets/screenshot2.png).

The app is live at https://elements-theta.vercel.app

## Built With

* React.js utilizing ```useState``` and ```useEffect```. I read the [React docs](www.reactjs.org) to learn about using the ```useRef``` hook but didn't eventually use it in this project.  

* CSS
  
* Axios (first time using this library in a project. I was conversant with Fetch before).

* HTML5 Geolocation API

## Challenges

* The first challenge I faced was working with the HTML5 Geolocation API as this is the first time I'm working with such API. Encountered many errors such as "Permission was revoked" which was weird as I allowed the app to access my location. Read the [MDN](www.developer.mozilla.org) docs to see if I could troubleshoot the problem but still couldn't find the solution and resorted to turning my machine on and off. Eventually got a new error - progress, right? The error was "Network Error". Turned out the Geolocation API needed to be connected to the Internet to work (🤦‍♂️). 
  
* A new challenge arose when I decided to cut short the stress the user goes through when checking out the day's hourly forecast info in the hourly forecast carousel. I wanted to make the info for the current hour be displayed visibly to the user everytime, so I decided to remove every hour that has passed and only display the current hour's info and those after. Ran into trouble when the styles I applied for the current hour was applying to all the other hour too. Took a break and figured that I could use the `nanoid` library to generate random unique IDs for the array I was iterating through with the `.map` method. It wasn't until I modified the parameters that check for a match of current time and the weather data time that I was able to solve the issue.

* The most challenging aspect of it all is the design. I couldn't get a design that snuggly suit what I wanted and resorted to a mishmash of designs from the design platform, Behance to inspire me. I had to use my best judgement for the design elements such as fonts and image sizes. I also used the Refactoring UI book by Steve Schoger to guide my User Interface layout and ensure there's enough white space, contrast, typography and color.

## Getting Started

1. Clone the repo at https://github.com/mighty-odewumi/elements-app with ```git clone https://github.com/mighty-odewumi/elements-app.git```.
 
2. Install NPM packages ```npm install```.
 
3. Start up development server ```npm start```.

## Features

- [ ] Displays current weather condition such as Wind Speed, Probability of Rainfall, Humidity and the current Temperature.
- [ ] Search bar to search new locations.
- [ ] Users can also view the day's forecasts hourly in a carousel.
- [ ] Ability to view weather forecasts for a week.
- [ ] Built in Dark Mode by default.
- [ ] Hightlights the current hour's weather conditions in the carousel.
- [ ] Recently added the ability to toggle between light and dark modes.
- [ ] Switching between pages now has smooth animation implemented.
- [ ] App is now responsive on different screen sizes.

## Future Features

- [ ] Displaying more detailed weather info such as UV Index, Carbon Emissions Level and also Alerts issued by government or meteorological agencies.
- [ ] Displaying an animation when the data is being fetched from the API (based on review from a fellow developer online).

## Acknowledgements

* [WeatherAPI](www.weatherapi.com)
* [SVGRepo](www.svgrepo.com)
* [StackOverflow](www.stackoverflow.com)
* [Unsplash](www.unsplash.com)
