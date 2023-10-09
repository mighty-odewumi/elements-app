import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner({checkPageWidth, pageBody}) {

  const styles = { 
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const spinnerStyles = {
    borderColor: checkPageWidth && pageBody.style.backgroundColor === "black" ? "white" : "black", 
  };

  return (
    <div style={styles}>
      <ClipLoader color="#000" cssOverride={spinnerStyles} size={50} speedMultiplier={.5}/>
    </div>
  )
}
