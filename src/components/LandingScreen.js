export default function LandingScreen({flipDisplay, setFlipDisplay}) {
  
  function displayScreen() {
    setFlipDisplay(!flipDisplay);
  }

  return (
    <>
      <div className="landing-screen">
        <h1 className="logo-text">Elements</h1>
        <p>
          Get accurate weather forecasts
        </p>

        <button 
          className="landing-btn"
          onClick={displayScreen}
        >
          Get Started
        </button>
      </div>
    </>
    
  )
}
