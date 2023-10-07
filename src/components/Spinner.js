import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner() {

  const styles = { 
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }

  return (
    <div style={styles}>
      <ClipLoader color="#000" size={50} speedMultiplier={.5}/>
    </div>
  )
}
