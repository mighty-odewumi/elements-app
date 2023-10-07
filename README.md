# Elements (Weather App) 

Built this project from scratch using React and CSS. This app fetches weather data from the WeatherAPI site. View screenshots for the [main screen](src/assets/screenshot1.png) and the [weekly forecast screen](src/assets/screenshot2.png).

The app is live at https://elements-theta.vercel.app

## Built With

* React.js utilizing ```useState``` and ```useEffect```. I read the [React docs](www.reactjs.org) to learn about using the ```useRef``` hook to solve a problem but didn't eventually use it again in this project.  

* Pure CSS
  
* Axios (first time using this library in a project. I was conversant with Fetch before).

* HTML5 Geolocation API

## Challenges

* The first challenge I faced was working with the HTML5 Geolocation API as this is the first time I'm working with such API. Encountered many errors such as "Permission was revoked" which was weird as I allowed the app to access my location. Read the [MDN](www.developer.mozilla.org) docs to see if I could troubleshoot the problem but still couldn't find the solution and resorted to turning my machine on and off. Eventually got a new error - progress, right? The error was "Network Error". Turned out the Geolocation API needed to be connected to the Internet to work (🤦‍♂️). 
  
* A new challenge arose when I decided to cut short the stress the user goes through when checking out the day's hourly forecast info in the hourly forecast carousel. I wanted to make the info for the current hour be displayed visibly to the user everytime, so I decided to remove every hour that has passed and only display the current hour's info and those after. Ran into trouble when the styles I applied for the current hour was applying to all the other hour too. Took a break and figured that I could use the `nanoid` library to generate random unique IDs for the array I was iterating through with the `.map` method. It wasn't until I modified the parameters that check for a match of current time and the weather data time that I was able to solve the issue.

* The most challenging aspect of it all is the design. I couldn't get a design that snuggly suit what I wanted and resorted to a mishmash of designs from the design platform, Behance to inspire me. I had to use my best judgement for the design elements such as fonts and image sizes. I also used the Refactoring UI book by Steve Schoger to guide my User Interface layout and ensure there's enough white space, contrast, typography and color.
  
* Learnt a neat trick to force the React component to re-render even though it doesn't want to or there is no seemingly observable state change. Used this to fix the issue of the app not displaying correct styles in default dark mode on larger screens. Examples I found made use of the ```useReducer``` hook but I eventually used the ```useState``` manipulated with a function called within a ```setInterval``` and ```setTimeout```.

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
- [ ] Highlights the current hour's weather conditions in the carousel.
  
  ### Recent Updates

- [ ] Recently added the ability to toggle between light and dark modes.
- [ ] Switching between pages now has smooth animation implemented.
- [ ] App is now responsive on different screen sizes.
- [ ] Added a spinner animation when the data is being fetched from the API (based on review from a fellow developer online).
- [ ] Added meaningful images to display with error messages.
  
## Future Features

- [ ] Displaying more detailed weather info such as UV Index, Carbon Emissions Level and also Alerts issued by government or meteorological agencies.

## Issues
- [ ] I want to fix the spinner loader to change color on smaller screens. Currently, it is displaying but because the background of the app is black by default, the user doesn't see the spinner because it is dark in color. On bigger screens, this shows up because the page's background has been made to be white.


## Acknowledgements

* [WeatherAPI](www.weatherapi.com)
* [SVGRepo](www.svgrepo.com)
* [StackOverflow](www.stackoverflow.com)
* [Unsplash](www.unsplash.com)
